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
					data-test="appbar-home"
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

		<router-link v-bind:to="'/cart'">
			<v-badge
				color="accent"
				:content="this.cartSize"
				:value="Boolean(this.cartSize)"
				offset-x="20"
				offset-y="25"
				data-test="appbar-cart-badge"
			>
				<v-btn icon>
					<v-icon data-test="appbar-cart">fa fa-shopping-cart</v-icon>
				</v-btn>
			</v-badge>
		</router-link>

		<v-menu
			offset-y
			open-on-hover
			close-delay="200"
			min-width="200px"
		>
			<template v-slot:activator="{on, attrs}">
				<v-btn icon v-bind="attrs" v-on="on">
					<v-icon>mdi-account-circle</v-icon>
				</v-btn>
			</template>

			<v-list>
				<v-list-item v-if="Boolean(this.loggedIn)">
					<router-link v-bind:to="'/account'" class="nav-link">
						<v-list-item-icon class="d-inline-flex">
							<v-icon data-test="appbar-account">mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-content class="d-inline-flex">
							<v-list-item-title>Account</v-list-item-title>
						</v-list-item-content>
					</router-link>
				</v-list-item>

				<v-list-item v-else>
					<router-link v-bind:to="'/login'" class="nav-link">
						<v-list-item-icon class="d-inline-flex">
							<v-icon data-test="appbar-login">mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-content class="d-inline-flex">
							<v-list-item-title>Login/Sign Up</v-list-item-title>
						</v-list-item-content>
					</router-link>
				</v-list-item>

				<v-list-item v-if="Boolean(this.loggedIn)">
					<router-link v-bind:to="'/favorites'" class="nav-link">
						<v-list-item-icon class="d-inline-flex">
							<v-icon data-test="appbar-favorites">mdi-heart</v-icon>
						</v-list-item-icon>
						<v-list-item-content class="d-inline-flex">
							<v-list-item-title>Favorites</v-list-item-title>
						</v-list-item-content>
					</router-link>
				</v-list-item>
			</v-list>
		</v-menu>

	</v-app-bar>
</template>

<script>
export default {
	computed: {
		cartSize() {
			return this.$store.state.cart.length;
		},
		loggedIn() {
			return this.$store.state.user;
		}
	},
}
</script>

<style>
	.nav-link {
		text-decoration: none;
	}
</style>