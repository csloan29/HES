<template>
	<div>
		<v-btn
			icon
			@click="toggleFavorite"
		>
			<v-icon
				v-if="this.favorite != undefined"
				color="#91E0AC"
			>mdi-heart</v-icon>
			<v-icon v-else>mdi-heart</v-icon>
		</v-btn>

	</div>
</template>

<script>
export default {
	props: ['id'],
	computed: {
		favorite() {
			return this.$store.state.favorites.find(({product_id}) => product_id == this.id);
		},
		user() {
			return this.$store.state.user;
		}
	},
	methods: {
		toggleFavorite: function() {
			if (this.user == null) {
				this.$store.dispatch('setMessage', {"message": "Please Log In to Add Favorites", "error": true});
			} else {
				if (this.favorite != undefined) {
					this.$store.dispatch('removeFavorite', this.id);
				} else {
					this.$store.dispatch('addFavorite', this.id);
				}
			}
		}
	}
}
</script>

<style>

</style>