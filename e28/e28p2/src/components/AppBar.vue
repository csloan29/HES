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
					src="../assets/favicon/android-chrome-512x512.png"
					transition="scale-transition"
					width="40"
				/>

				<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="../assets/Packbase-text-logo.png"
					width="100"
				/>
			</div>
		</router-link>

		<v-text-field
			placeholder="Search"
			solo
			class="mx-15 mt-7"
		></v-text-field>
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
			<v-btn icon>
				<v-icon>fa fa-shopping-cart</v-icon>
			</v-btn>
		</router-link>
	</v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>