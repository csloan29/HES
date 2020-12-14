import Vue from 'vue'
import Vuex from 'vuex'

import { axios } from '@/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
		account: {
			email: "",
			userId: NaN
		},
		cart: [],
		products: [],
		allDataLoaded: false,
	},
	mutations: {
		setAllDataLoaded(state) {
			state.allDataLoaded = true;
		},
		setProducts(state, payload) {
			state.products = payload;
		},
		setCart(state, payload) {
			state.cart = payload;
		},
		addToCart(state, payload) {
			state.cart.append(payload);
		},
		removeFromCart(state, payload) {
			state.cart.forEach((productId, idx) => {
				if (productId == payload) {
					state.cart.splice(idx, 1);
				}
			});
		}
	},
	actions: {

		//APP ACTIONS
		fetchAllData(context) {
			let products = context.dispatch('fetchProducts');
			let cart = context.dispatch('fetchCart');

			return Promise.all([products, cart])
			.then(() => {
				context.commit('setAllDataLoaded', true);
			})
			.catch((err) => {
				console.log("An error occurred loading all data");
				console.log(err);
			});
		},

		//USER ACTIONS
		//todo

		//PRODUCT ACTIONS
		fetchProducts(context) {
			return axios.get('/product')
			.then((res) => {
				context.commit('setProducts', res.data.product);
			})
			.catch((err) => {
				console.log("An error occurred loading product data");
				console.log(err);
			});
		},

		//CART ACTIONS
		fetchCart(context) {
			return axios.get('/cart')
			.then((res) => {
				context.commit('setCart', res.data.cart);
			})
			.catch((err) => {
				console.log("An error occurred loading cart data");
				console.log(err);
			});
		},
		addToCart(context, userId, productId) {
			return axios.post('/cart', {'id_user': userId, 'id_product': productId})
			.then((res) => {
				context.commit('setCart', res.data.cart);
			})
			.catch((err) => {
				console.log("could not add item to cart");
				console.log(err);
			});
		},
		removeFromCart(context, userId, productId) {
			axios.delete('/cart', {'id_user': userId, 'id_product': productId})
			.then((res) => {
				context.commit('removeFromCart', res.data.productId);
			})
			.catch((err) => {
				console.log("could not remove item from cart");
				console.log(err);
			});
		},

		// //FAVORITE ACTIONS
		// fetchFavorites(context) {
		// 	return axios.get('/favorite')
		// 	.then((res) => {
		// 		context.commit('setFavorites', res.data.favorite);
		// 	})
		// 	.catch((err) => {
		// 		console.log("An error occurred loading favorite data");
		// 		console.log(err);
		// 	});
		// },
		// addFavorite(context, userId, productId) {
		// 	return axios.post('/favorite', {'id_user': userId, 'id_product': productId})
		// 	.then((res) => {
		// 		context.commit('addToFavorites', res.data.productId);
		// 	})
		// 	.catch((err) => {
		// 		console.log("could not add item to favorites");
		// 		console.log(err);
		// 	});
		// },
		// removeFavorite(context, userId, productId) {
		// 	axios.delete('/favorite', {'id_user': userId, 'id_product': productId})
		// 	.then((res) => {
		// 		context.commit('removeFromFavorites', res.data.productId);
		// 	})
		// 	.catch((err) => {
		// 		console.log("could not remove item from favorites");
		// 		console.log(err);
		// 	});
		// }
	}
})