<template>
	<v-app>
		<app-bar></app-bar>
		<v-main v-if="this.loaded">
			<router-view
				v-bind:products="products"
				v-bind:review="reviews"
				v-bind:cart="cart"
				v-on:update-product-data="updateProductData"
				v-on:update-review-data="updateReviewData"
				v-on:add-to-cart="addToCart"
				v-on:remove-from-cart="removeFromCart"
			></router-view>
		</v-main>

		<v-snackbar v-model="cartSnackbar">
			<div v-if="this.cartToggle">Added To Cart</div>
			<div v-else>Removed To Cart</div>
			<template v-slot:action="{ attrs }">
				<v-btn
				color="accent"
				text
				v-bind="attrs"
				@click="snackbar = false"
				>
				Close
				</v-btn>
			</template>
		</v-snackbar>

		<v-snackbar v-model="errorSnackbar">
			<div>Could Not Complete Action</div>
			<template v-slot:action="{ attrs }">
				<v-btn
				color="error"
				text
				v-bind="attrs"
				@click="snackbar = false"
				>
				Close
				</v-btn>
			</template>
		</v-snackbar>
	</v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
import { axios } from '@/app.js';

export default {
	name: 'App',

	components: {
		"app-bar": AppBar,
	},

	data: () => ({
		loaded: false,
		hasLoaded: 0,
		products: null,
		reviews: null,
		reviewDB: null,
		cart: null,
		errorSnackbar: false,
		cartSnackbar: false,
		cartToggle: false
	}),
	methods: {
		checkAllDataLoaded() {
			if (!this.loaded) {
				this.hasLoaded += 1;
				if (this.hasLoaded == 3) {
					this.loaded = true;
				}
			}
		},
		updateProductData: function() {
			axios.get('/product').then((res) => {
				if (res.data.errors != null) {
					console.log(res.data.errors);
					this.errorSnackbar = true;
				} else {
					this.products = res.data.product;
					this.checkAllDataLoaded();
				}
			});
		},
		updateCartData: function() {
			axios.get('/cart').then((res) => {
				if (res.data.errors != null) {
					console.log(res.data.errors);
					this.errorSnackbar = true;
				} else {
					this.cart = res.data.cart;
					this.checkAllDataLoaded();
				}
			});
		},
		updateReviewData: function() {
			axios.get('/review').then((res) => {
				if (res.data.errors != null) {
					console.log(res.data.errors);
					this.errorSnackbar = true;
				} else {
					this.reviews = res.data.review;
					this.checkAllDataLoaded();
				}
			});
		},
		addToCart: function(productId) {
			axios.post('/cart', {'id_product': productId}).then((res) => {
				if (res.data.errors != null) {
					console.log(res.data.errors);
					this.errorSnackbar = true;
				} else {
					this.updateCartData();
					this.cartToggle = true;
					this.cartSnackbar = true;
				}
			});
		},
		removeFromCart: function(cartId) {
			axios.delete('/cart/' + cartId).then((res) => {
				if (res.data.errors != null) {
					console.log(res.data.errors);
					this.errorSnackbar = true;
				}else {
					this.updateCartData();
					this.cartToggle = false;
					this.cartSnackbar = true;
				}
			});
		}
	},
	mounted() {
		this.updateProductData();
		this.updateReviewData();
		this.updateCartData();

	}
};
</script>

<style>
</style>
