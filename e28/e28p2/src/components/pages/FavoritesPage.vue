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
import ProductList from '@/components/ProductList';

export default {
	props: [ 'products' ],
	components: {
		'product-list': ProductList,
	},
	data: function() {
		return {}
	},
	computed: {
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