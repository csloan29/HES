<template>
	<div>
		<v-btn
			icon
			@click="toggleFavorite"
		>
			<v-icon
				v-if="this.favorite == true"
				color="#91E0AC"
			>mdi-heart</v-icon>
			<v-icon v-else>mdi-heart</v-icon>
		</v-btn>

		<v-snackbar v-model="snackbar">
			<div v-if="favorite">Added To Favorites</div>
			<div v-else>Removed From Favorites</div>
			<div>(not implemented yet)</div>
			<template v-slot:action="{ attrs }">
				<v-btn
				color="accent"
				text
				v-bind="attrs"
				@click="snackbar = false"
				>
				Close
				</v-btn>
			</template>
		</v-snackbar>
	</div>
</template>

<script>
export default {
	props: ['id', 'favorite'],
	data: function() {
		return {
			'snackbar': false,
		}
	},
	methods: {
		toggleFavorite: function() {
			//todo: add user id to this dispatch
			if (this.favorite) {
				this.$store.dispatch('removeFromFavorites', this.id);
			} else {
				this.$store.dispatch('addToFavorites', this.id);
			}
			this.snackbar = true;
		}
	}
}
</script>

<style>

</style>