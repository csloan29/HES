<template>
	<div id="app">
		<img id="logo" alt="ZipFoods logo" src="@/assets/images/zipfoods-logo.png">
		<nav>
			<ul>
				<li>
					<router-link
						v-for="link in links"
						v-bind:key="link"
						v-bind:to="paths[link]"
						exact
						>{{ link }}</router-link
					>
				</li>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	data: function() {
		return {
			/* Default page to start with */
			page: 'home',

			/* Store links in an array to maintain order */
			links: ['home', 'products', 'categories'],

			/* Map links to the appropriate component */
			paths: {
				home: '/',
				products: '/products',
				categories: '/categories',
			},
		}
	}
}
</script>

<style lang='scss'>
	@import '@/assets/styles/scss/zipfoods.scss';
</style>
