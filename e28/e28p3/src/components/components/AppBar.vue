<template>
  <v-app-bar
		app
		color="primary"
		dark
		class="px-3"
	>
		<router-link
			v-bind:to="'/'"
		>
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="../../assets/favicon/android-chrome-512x512.png"
					transition="scale-transition"
					width="40"
				/>
				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="../../assets/Packbase-text-logo.png"
					width="100"
				/>
			</div>
		</router-link>

		<v-spacer></v-spacer>

		<router-link
			v-bind:to="'/favorites'"
		>
			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>
		</router-link>

		<router-link
			v-bind:to="'/cart'"
		>
			<v-badge
				color="accent"
				:content="this.cartSize"
				offset-x="20"
				offset-y="25"
			>
				<v-btn icon>
					<v-icon>fa fa-shopping-cart</v-icon>
				</v-btn>
			</v-badge>
		</router-link>

		<router-link
			v-bind:to="'/login'"
		>
			<v-btn icon>
				<v-icon>mdi-account-circle</v-icon>
			</v-btn>
		</router-link>
	</v-app-bar>
</template>

<script>
export default {
	computed: {
		cartSize() {
			return this.$store.state.cart.length;
		}
	},
}
</script>

<style>

</style>