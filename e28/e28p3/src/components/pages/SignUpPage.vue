<template>
	<v-container class="fill-height">
		<form
			class="mx-auto text-center"
			width="500px"
		>
			<v-row>
				<v-col>
					<img class="mb-4" src="../../assets/Backpack_icon.svg" alt="" width="72" height="72">
					<h1 class="mb-5">Sign Up</h1>
					<v-text-field
						v-model="firstName"
						solo
						label="First Name"
						:rules="[rules.required]"
					></v-text-field>
					<v-text-field
						v-model="lastName"
						solo
						label="Last Name"
						:rules="[rules.required]"
					></v-text-field>
					<v-text-field
						v-model="email"
						solo
						label="Email"
						:rules="[rules.required, rules.email]"
					></v-text-field>
					<v-text-field
						:append-icon="showPass? 'mdi-eye' : 'mdi-eye-off'"
						:type="showPass ? 'text' : 'password'"
						v-model="password"
						solo
						label="Password"
						:rules="[rules.required, rules.passwordMin]"
						@click:append="showPass = !showPass"
					></v-text-field>
					<v-text-field
						:append-icon="showPassCheck ? 'mdi-eye' : 'mdi-eye-off'"
						:type="showPassCheck ? 'text' : 'password'"
						v-model="passwordCheck"
						solo
						label="Re-Type Password"
						hint="match password"
						:rules="[rules.required, rules.passwordMatch]"
						@click:append="showPassCheck = !showPassCheck"
					></v-text-field>
					<v-btn
						depressed
						color="accent"
						@click="register"
						>
						Submit
					</v-btn>
					<v-container>
						Already have an account?
						<router-link
							class="login-link"
							v-bind:to="'/login'"
						>
							<v-btn
								class="px-0"
								text
								color="accent"
								>
								Login
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
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			showPass: false,
			passwordCheck: "",
			showPassCheck: false,
			rules: {
				required: value => !!value || 'Required.',
				passwordMatch: value => value == this.password || "Passwords do not match.",
				passwordMin: v => v.length >= 8 || 'Min 8 characters',
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Invalid e-mail.'
				},
			},
		}
	},
	computed: {
		fullName() {
			return this.firstName + " " + this.lastName;
		},
	},
	methods: {
		register() {
			axios.post('register', {"email": this.email, "password": this.password, "name": this.fullName}).then((response) => {
				if (response.data.success) {
					this.$store.dispatch('setMessage', {"message": "Successfully Registered", "error": false});
					this.$store.dispatch('setUser', response.data.user);
					this.$router.push('/');
				} else {
					console.log(response);
					this.$store.dispatch('setMessage', {"message": "Registration Unsuccessful", "error": true});
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