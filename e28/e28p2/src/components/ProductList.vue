<template>
	<!-- todo: fix grid system below -->
	<v-container fluid class="pt-5">
		<v-row class="px-5">
			<v-col
				v-for="product in productList"
				:key="product.id"
				:cols="12"
				md="3"
			>
				<product-card
					:product="product"
				></product-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard';

export default {
	props: [ "productList" ],
	components: {
		'product-card': ProductCard,
	}
}
</script>

<style>

</style>