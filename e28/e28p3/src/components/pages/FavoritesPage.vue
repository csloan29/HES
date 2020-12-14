<template>
	<div>
		<div class="d-flex justify-center text-h4 mt-10">
			<h1>Favorites</h1>
		</div>
		<product-list
			:productList=favoriteProducts
		></product-list>
	</div>
</template>

<script>
import ProductList from '@/components/components/ProductList';

export default {
	components: {
		'product-list': ProductList,
	},
	data: function() {
		return {}
	},
	computed: {
		products() {
			return this.$store.state.products;
		},
		favoriteProducts() {
			let arr = [];
			this.products.forEach((p) => {
				if (p.favorite == true) {
					arr.push(p);
				}
			});
			return arr;
		}
	},
}
</script>

<style>

</style>