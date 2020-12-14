<template>
	<div>
		<div class="d-flex justify-center text-h4 mt-10">
			<h1>Inventory</h1>
		</div>
		<product-list
			:productList=products
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
		}
	}
}
</script>

<style>

</style>