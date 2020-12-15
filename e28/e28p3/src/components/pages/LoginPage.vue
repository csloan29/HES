<template>
	<v-container class="fill-height">
		<form
			class="mx-auto text-center"
			width="500px"
		>
			<v-row>
				<v-col>
					<img class="mb-4" src="../../assets/Backpack_icon.svg" alt="" width="72" height="72">
					<h1 class="mb-5">Login</h1>
					<v-text-field
						v-model="email"
						solo
						label="Email"
						:rules="[rules.required, rules.email]"
						clearable
					></v-text-field>
					<v-text-field
						v-model="password"
						solo
						label="Password"
						:rules="[rules.required]"
						clearable
					></v-text-field>
					<v-btn
						depressed
						color="accent"
						@click="login"
						>
						Submit
					</v-btn>
					<v-container>
						Don't have an account yet?
						<router-link
							class="login-link"
							v-bind:to="'/signup'"
						>
							<v-btn
								class="px-0"
								text
								color="accent"
								>
								Sign Up
							</v-btn>
						</router-link>
					</v-container>
				</v-col>
			</v-row>
		</form>
	</v-container>
</template>

<script>
import { axios } from '@/common/app.js';

export default {
	data: function() {
		return {
			email: "",
			password: "",
			rules: {
				required: value => !!value || 'Required.',
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Invalid e-mail.'
				},
			},
		}
	},
	methods: {
		login() {
			axios.post('login', {"email": this.email, "password": this.password}).then((response) => {
				if (response.data.authenticated) {
					this.$store.dispatch('setMessage', {"message": "Successfully Logged In", "error": false});
					this.$store.dispatch('setUser', response.data.user);
					this.$router.push('/');
				} else {
					this.$store.dispatch('setMessage', {"message": "Login Unsuccessful", "error": true});
				}
			});
		}
	}

}
</script>

<style>
	.login-link {
		text-decoration: none;
	}

</style>