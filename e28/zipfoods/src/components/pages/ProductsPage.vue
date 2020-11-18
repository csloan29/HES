<template>
    <div id="products">
        <h2>Products</h2>
        <router-link
            v-for="product in products"
            :key="product.id"
            v-bind:to="'/products/' + product.id"
			exact
		>
			<show-product :product="product"></show-product>
		</router-link>
    </div>
</template>

<script>
import { products } from '@/data/products.js';
import ShowProduct from '@/components/ShowProduct.vue';

export default {
	name: '',
	components: {
		'show-product': ShowProduct,
	},
	props: [],
	data: function() {
		return {
			products: products,
		};
	},
};
</script>

<style scoped>

</style>