<template>
	<v-dialog
		v-model="dialog"
		width="700"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				text
				color=""
				v-bind="attrs"
				v-on="on"
				class="ml-auto"
			>Add Review
			</v-btn>
		</template>

		<v-card>
			<v-card-title class="headline grey lighten-2">
			Add Review
			</v-card-title>

			<v-card-text>
				<v-container>
					<v-row>
						<v-col>
							<v-text-field
								placeholder="review title"
								outlined
								dense
								v-model="this.newReview.title"
							></v-text-field>
							<v-textarea
								outlined
								auto-grow
								label="Your Review"
								placeholder="add review here..."
								v-model="this.newReview.description"
							></v-textarea>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
					<v-btn
						color="secondary"
						text
						@click="dialog = false"
					>Close
					</v-btn>
				<v-btn
					text
					color="primary"
					@click="dialog = false"
				>Save
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import { axios } from '@/app.js';

export default {
	data: function() {
		return {
			dialog: false,
			newReview: {
				title: '',
				description: '',
				rating: ''
			}
		}
	},
	methods: {
		addReview() {
			axios.post('/product/review', this.newReview).then((res) => {
				if (res.data.errors != null) {
					//todo: let user know of error
				}
				console.log("NEW REVIEW CREATED");
				// this.$emit('update-products');
			})
		}
	}
}
</script>

<style>

</style>