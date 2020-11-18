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
import ProductList from '@/components/ProductList';

export default {
	props: ['products'],
	components: {
		'product-list': ProductList,
	},
	data: function() {
		return {}
	}
}
</script>

<style>

</style>