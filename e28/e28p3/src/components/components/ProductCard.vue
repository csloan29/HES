<template>
	<div>
		<v-hover
			v-slot="{ hover }"
		>
			<v-card
				:elevation="hover ? 12 : 2"
				:class="{ 'on-hover': hover }"
			>
				<router-link
					v-bind:to="'/product/' + product.id"
					class="text-decoration-none"
				>
					<v-img
						:src="product.image"
						class="white--text align-end"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="250px"
					>
						<v-card-title v-text="product.title"></v-card-title>
					</v-img>
				</router-link>

				<v-card-actions>
					<div class="font-weight-medium ml-1">
						${{product.price}}
					</div>

					<v-spacer></v-spacer>

					<add-favorite-icon
						:id="product.id"
						:favorite="product.favorite"
					></add-favorite-icon>
				</v-card-actions>
			</v-card>
		</v-hover>
	</div>
</template>

<script>
import AddFavoriteIcon from '@/components/components/AddFavoriteIcon';

export default {
	props: [ 'product' ],
	components: {
		'add-favorite-icon': AddFavoriteIcon,
	}
}
</script>

<style>

</style>