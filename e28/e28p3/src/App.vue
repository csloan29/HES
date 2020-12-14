<template>
	<v-app>
		<app-bar></app-bar>

		<v-main v-if="this.allDataLoaded">
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

	</v-app>
</template>

<script>
import AppBar from '@/components/components/AppBar';

export default {
	name: 'App',

	components: {
		"app-bar": AppBar,
	},
	computed: {
		allDataLoaded: function() {
			return this.$store.state.allDataLoaded;
		}
	},
	mounted() {
		this.$store.dispatch('fetchAllData');
	}
};
</script>

<style>
</style>
