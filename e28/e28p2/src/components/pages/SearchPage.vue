<template>
	<div>
		<div class="d-flex justify-center text-h4 mt-10">
			<h1>Search Results</h1>
		</div>
		<product-list
			:productList=SearchResults
		></product-list>
	</div>
</template>

<script>
import ProductList from '@/components/ProductList';

export default {
	props: ['searchString'],
	components: {
		'product-list': ProductList,
	},
	data: function() {
		return {
			searchResults: {}
		}
	}
}
</script>

<style>

</style>