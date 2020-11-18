<!-- src/components/ShowProducts.vue -->
<template>
	<div id="products">
		<h2>Products</h2>
		<show-product
			v-for="product in products"
			:key="product.id"
			:product="product"
		></show-product>
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