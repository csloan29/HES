<template>
	<v-app>
		<app-bar></app-bar>

		<v-main v-if="this.appDataLoaded">
			<router-view></router-view>
		</v-main>

		<v-main v-else>
			<v-container class="fill-height">
				<v-progress-circular
					class="mx-auto"
					indeterminate
					color="accent"
				></v-progress-circular>
			</v-container>
		</v-main>

		<app-messenger></app-messenger>
	</v-app>
</template>

<script>
import AppBar from '@/components/components/AppBar';
import AppMessenger from '@/components/components/AppMessenger';

export default {
	name: 'App',

	components: {
		"app-bar": AppBar,
		"app-messenger": AppMessenger,
	},
	computed: {
		appDataLoaded: function() {
			return this.$store.state.appDataLoaded;
		}
	},
	mounted() {
		this.$store.dispatch('fetchAppData');
	}
};
</script>

<style>
</style>
