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
		favorites() {
			return this.$store.state.favorites;
		},
		favoriteProducts() {
			let arr = [];
			this.favorites.forEach((fav) => {
				this.products.forEach((product) => {
					if (fav.product_id == product.id) {
						arr.push(product);
					}
				});
			});
			return arr;
		}
	},
}
</script>

<style>

</style>