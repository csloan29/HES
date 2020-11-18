<!-- src/components/ShowFeatured.vue -->
<template>
    <div id="featured">
        <h2>Featured Products</h2>
        <ul class="cleanList">
            <li v-for="product in featuredProducts" :key="product.id">
                {{ product.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { products } from '@/data/products.js';

export default {
	props: [
		'category',
	],
	computed: {
		featuredProducts() {
			return this.products.filter((product) => {
				return product.categories.includes(this.category);
			}, this.category);
		},
	},
	data: function() {
		return {
			products: products,
		};
	},
}
</script>

<style scoped>

</style>