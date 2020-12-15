<template>
	<div id="home-page">

		<v-carousel
			cycle
			interval="10000"
			hide-delimiter-background
			show-arrows-on-hover
		>
			<v-carousel-item
				src="../../assets/Backpack-feat3.jpg"
				position="top 30% center"
			>
				<div class="fill-height hero-gradient">
					<h1 class="hero-text">Your Guide to Finding the Best Packs</h1>
				</div>
			</v-carousel-item>
			<v-carousel-item
				src="../../assets/Backpack-feat4.jpg"
				position="top 25% center"
			>
				<div class="fill-height hero-gradient">
					<h1 class="hero-text">From Daypacks to Packs You Can Put Your Life in</h1>
				</div>
			</v-carousel-item>
			<v-carousel-item
				src="../../assets/Backpack-feat5.jpg"
				position="top 40% center"
			>
				<div class="fill-height hero-gradient">
					<h1 class="hero-text">Where Will Your Next Pack Take You?</h1>
				</div>
			</v-carousel-item>
		</v-carousel>

		<div class="d-flex justify-center text-h4 mt-10">
			<h1 data-test="home-page-title">Featured Packs</h1>
		</div>
		<product-list
			:productList=products
		></product-list>

		<div class="mb-10" align="center">
			<router-link
				v-bind:to="'/inventory'"
				class="text-decoration-none"
			>
				<v-btn
					depressed
					color="accent"
					class="mx-auto"
				>See All Inventory
				</v-btn>
			</router-link>
		</div>

	</div>
</template>

<script>
import ProductList from '@/components/components/ProductList';

export default {
	components: {
		'product-list': ProductList
	},
	data: function() {
		return {
			searchString: ""
		}
	},
	computed: {
		products() {
			return this.$store.state.products;
		}
	}
}
</script>

<style>
	.hero-gradient{
		background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))
	}

	.hero-text {
		text-align: center;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
</style>