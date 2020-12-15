import Vue from 'vue';
import Vuex from 'vuex';

import { axios } from '@/common/app.js';
import { userPlugin } from '@/common/vuexStorePlugins/userPlugin';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
		//app data
		products: [],
		appDataLoaded: false,

		//user specific data
		user: null,
		cart: [],
		favorites: [],
		userDataLoaded: false,

		//message system data
		messageData: null
	},
	mutations: {
		//app mutations
		setProducts(state, payload) {
			state.products = payload;
		},

		//boolean check for all necessary app data retrieved
		setAppDataLoaded(state, payload) {
			state.appDataLoaded = payload;
		},

		//user mutations
		setUser(state, payload) {
			state.user = payload;
		},

		//cart mutations
		setCart(state, payload) {
			state.cart = payload;
		},
		addToCart(state, productId) {
			state.cart.push({"product_id": productId, "quantity": 1});
		},
		incrementProductInCart(state, cartIndex) {
			state.cart[cartIndex].quantity += 1;
		},
		decrementProductInCart(state, cartIndex) {
			state.cart[cartIndex].quantity -= 1;
		},
		removeFromCart(state, cartIndex) {
			state.cart.splice(cartIndex, 1);
		},

		//favorites mutations
		setFavorites(state, payload) {
			state.favorites = payload;
		},
		addToFavorites(state, payload) {
			let fav = state.favorites.findIndex( id => id === payload);
			if (fav === -1) {
				state.favorites.push(payload);
			}
		},
		removeFromFavorites(state, favoriteId) {
			let index = state.favorites.findIndex(({ id }) => id === favoriteId);
			if (index != -1) {
				state.favorites.splice(index, 1);
			}
		},

		//boolean check for all user data retrieved
		setUserDataLoaded(state, payload) {
			state.userDataLoaded = payload;
		},

		//message data mutations
		setMessage(state, payload) {
			state.messageData = payload;
		}
	},
	actions: {

		//APP ACTIONS
		fetchAppData(context) {
			let products = context.dispatch('fetchProducts');

			//using promise.all in case app will need to fetch other user data in the future, like reviews
			return Promise.all([products])
			.then(() => {
				context.commit('setAppDataLoaded', true);
				context.dispatch('authUser');
			})
			.catch((err) => {
				context.dispatch('setMessage', {"message": "could not fetch app data", "error": true});
				console.log(err);
			});
		},

		//USER ACTIONS
		setUser(context, user) {
			context.commit('setUser', user);
		},
		authUser(context) {
			return axios.post('auth').then((res) => {
				if (res.data.authenticated) {
					context.commit('setUser', res.data.user);
				}
			});
		},
		fetchUserData(context) {
			let favorites = context.dispatch('fetchFavorites');

			//using promise.all in case app will need to fetch other user data in the future, like saved cart data
			return Promise.all([favorites])
			.then(() => {
				context.commit('setUserDataLoaded', true);
			})
			.catch((err) => {
				context.dispatch('setMessage', {"message": "could not fetch user data", "error": true});
				console.log(err);
			});
		},

		//PRODUCT ACTIONS
		fetchProducts(context) {
			return axios.get('/product')
			.then((res) => {
				context.commit('setProducts', res.data.product);
			})
			.catch((err) => {
				context.dispatch('setMessage', {"message": "could not fetch product data", "error": true});
				console.log(err);
			});
		},

		//cart actions
		addToCart(context, productId) {
			let index = context.state.cart.findIndex(({product_id}) => product_id == productId);
			if (index === -1) {
				context.commit('addToCart', productId);
			} else {
				context.commit('incrementProductInCart', index);
			}
			context.dispatch('setMessage', {"message": "Added To Cart", "error": false});
		},
		removeFromCart(context, productId) {
			let index = context.state.cart.findIndex(({product_id}) => product_id == productId);
			if (index === -1) {
				return;
			} else {
				if (context.state.cart[index].quantity === 1) {
					context.commit('removeFromCart', index);
				} else {
					context.commit('decrementProductInCart', index);
				}
				context.dispatch('setMessage', {"message": "Removed from Cart", "error": false});
			}
		},
		clearCart(context) {
			context.commit('setCart', []);
		},

		//favorite actions
		fetchFavorites(context) {
			return axios.get('/favorite')
			.then((res) => {
				context.commit('setFavorites', res.data.favorite);
			})
			.catch((err) => {
				context.dispatch('setMessage', {"message": "an error occurred loading your favorites", "error": true});
				console.log(err);
			});
		},
		addFavorite(context, productId) {
			if (!context.state.favorites.find(({product_id}) => product_id == productId)) {
				return axios.post('/favorite', {"product_id": productId})
				.then((res) => {
					console.log('adding favorite...');
					context.commit('addToFavorites', res.data.favorite);
					context.dispatch('setMessage', {"message": "Added to Your Favorites", "error": false});
				})
				.catch((err) => {
					context.dispatch('setMessage', {"message": "could not add to favorites", "error": true});
					console.log(err);
				});
			}
		},
		removeFavorite(context, productId) {
			let favorite = context.state.favorites.find(({product_id}) => product_id == productId);
			if (favorite != undefined) {
				axios.delete('/favorite/' + favorite.id)
				.then(() => {
					context.commit('removeFromFavorites', favorite.id);
					context.dispatch('setMessage', {"message": "Removed from Your Favorites", "error": false});
				})
				.catch((err) => {
					console.log("could not remove item from favorites");
					console.log(err);
				});
			}
		},

		//message data actions
		setMessage(context, messageData) {
			context.commit('setMessage', messageData);
		},
		resetMessage(context) {
			context.commit('setMessage', null);
		}
	},
	plugins: [userPlugin]
});

