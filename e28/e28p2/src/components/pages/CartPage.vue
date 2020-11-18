<template>
	<div>
		<div class="d-flex justify-center text-h4 mt-10">
			<h1>Your Cart</h1>
		</div>
		<v-container
			class="mt-10 mb-16"
			width="800px">
			<v-row>
				<v-col cols="5">
					<h4>Product</h4>
				</v-col>
				<v-col cols="3">
					<h4>Price</h4>
				</v-col>
				<v-col cols="3">
					<h4>Quantity</h4>
				</v-col>
				<v-col cols="1">
					<h4>Total</h4>
				</v-col>
			</v-row>

			<v-divider class="mb-5"></v-divider>

			<v-card
				v-for="cartObj in cartProducts"
				:key="cartObj.product.id"
				class="mx-auto grey lighten-5"
				outlined
				tile
			>
				<v-row>
					<v-col cols="5">
						<router-link
							v-bind:to="'/product/' + cartObj.product.id"
							class="text-decoration-none"
						>
							<v-row>
								<v-col cols="4">
									<v-img
										:src="cartObj.product.image"
										gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
										max-width="150px"
										contain
									></v-img>
								</v-col>
								<v-col cols="5">
									<v-container fill-height class="pl-0">
										{{ cartObj.product.title }}
									</v-container>
								</v-col>
							</v-row>
						</router-link>
					</v-col>
					<v-col cols="3">
						<v-container fill-height class="pl-0">
							${{ Number(cartObj.product.price).toFixed(2) }}
						</v-container>
					</v-col>
					<v-col cols="3">
						<v-container fill-height class="pl-0">
							{{ cartObj.quantity }}
						</v-container>
					</v-col>
					<v-col cols="1">
						<v-container fill-height class="pl-0">
							${{ Number(cartObj.product.price * cartObj.quantity).toFixed(2) }}
						</v-container>
					</v-col>
				</v-row>
			</v-card>
			<v-row>
				<v-spacer></v-spacer>
				<v-col cols="3">
					<v-container class="text-right">
						Sub-Total:
					</v-container>
				</v-col>
				<v-col cols="1">
					<v-container class="pl-0">
						${{ Number(subTotal).toFixed(2) }}
					</v-container>
				</v-col>
			</v-row>
			<v-row>
				<v-spacer></v-spacer>
				<v-col cols="2">
					<v-container>
						<v-btn
							depressed
							large
							color="accent"
							class="float-right"
							@click="checkout"
						>Checkout
						</v-btn>

						<v-snackbar v-model="snackbar">
							<div>Horray! You bought the stuff!</div>
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
					</v-container>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	props: [ 'products', 'cart' ],
	data: function() {
		return {
			snackbar: false
		}
	},
	computed: {
		cartProducts() {
			let obj = {};
			this.cart.forEach((cartObj) => {
				this.products.forEach((product) => {
					if (cartObj.id_product == product.id) {
						if (obj[cartObj.id_product] != null) {
							obj[cartObj.id_product]['quantity'] += 1;
						} else {
							obj[cartObj.id_product] = {
								'product': product,
								'quantity': 1
							}
						}
					}
				});
			});
			return obj;
		},
		subTotal: function() {
			let sum = 0;
			for (let key in this.cartProducts) {
				sum += (Number(this.cartProducts[key].product.price) * this.cartProducts[key].quantity);
			}
			return sum;
		}
	},
	methods: {
		checkout: function() {
			this.snackbar = true;
		}
	}
}
</script>

<style>

</style>