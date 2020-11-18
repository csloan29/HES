<template>
    <div id='product-page'>
        <div v-if="product">
			<show-product :product="product" :includeDetails="true"></show-product>
		</div>
		<div v-if="productNotFound">
			<p>Product {{id}} not found.</p>
			<router-link v-bind:to="'/products'">Go to all products</router-link>
		</div>
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue';
import { products } from "@/data/products.js";

export default {
	name: '',
	props: ['id'],
	components: {
		'show-product': ShowProduct,
	},
    data() {
        return {
			product: null,
			products: products,
			productNotFound: false,
        };
	},
	mounted() {
		this.product = this.products.filter((product) => {
			return product.id == this.id;
		}, this.id)[0];

		if (this.product == null) {
			this.productNotFound = true;
		}
	}
};
</script>