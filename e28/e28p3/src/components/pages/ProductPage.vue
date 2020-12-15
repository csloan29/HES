<template>
	<div class="mt-5">
		<v-row class="px-16">
			<v-col offset-md="1" md="5">
				<v-img
					:src="product.image"
					class="white--text align-end"
					gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
					max-width="100%"
				>
				</v-img>
			</v-col>
			<v-col class="pl-16">
				<fa-rating
					:glyph="this.StarIcon"
					:spacing="2"
					:item-size="12"
					:inactive-color="'#cfcfcf'"
					:active-color="'#000'"
					:increment="0.2"
					:fixed-points="2"
					:show-rating="false"
					>
				</fa-rating>
				<div class="d-flex">
					<h2>{{this.product.title}}</h2>
					<add-favorite-icon
						:id="product.id"
						class="ml-auto"
					>
					</add-favorite-icon>
				</div>
				<h5 class="mt-5">{{this.product.description}}</h5>
				<v-btn
					depressed
					large
					color="accent"
					class="mx-auto mt-5"
					@click="addToCart"
				>Add To Cart
				</v-btn>
				<v-container fluid class="mt-5">
					<div class="d-flex">
						<h3>Reviews</h3>
						<add-review-dialog></add-review-dialog>
					</div>
					<!-- todo: add reviews here -->
				</v-container>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import { FaRating } from 'vue-rate-it';
import Star from 'vue-rate-it/glyphs/star';

import AddFavoriteIcon from '@/components/components/AddFavoriteIcon';
import AddReviewDialog from '@/components/components/AddReviewDialog';

export default {
	props: [ 'id' ],
	components: {
		'add-favorite-icon': AddFavoriteIcon,
		'add-review-dialog': AddReviewDialog,
		'fa-rating': FaRating,
	},
	computed: {
		products() {
			return this.$store.state.products;
		},
		product() {
			return this.products.filter((p) => {
				return p.id == this.id;
			}, this.id)[0];
		}
	},
	data: function() {
		return {
			starIcon: null,
			reviewScore: 0,
			productNotFound: false
		}
	},
	methods: {
		addToCart: function() {
			this.$store.dispatch('addToCart', this.id);
		}
	},
	created() {
		this.StarIcon = Star;
	}
}
</script>

<style>

</style>