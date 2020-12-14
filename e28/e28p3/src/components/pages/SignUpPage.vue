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
						clearable
					></v-text-field>
					<v-text-field
						v-model="lastName"
						solo
						label="Last Name"
						clearable
					></v-text-field>
					<v-text-field
						v-model="email"
						solo
						label="Email"
						clearable
					></v-text-field>
					<v-text-field
						v-model="password"
						solo
						label="Password"
						clearable
					></v-text-field>
					<v-text-field
						v-model="passwordCheck"
						solo
						label="Re-Type Password"
						clearable
					></v-text-field>
					<v-btn
						depressed
						color="accent"
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
export default {
	data: function() {
		return {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			passwordCheck: ""
		}
	}

}
</script>

<style>
	.login-link {
		text-decoration: none;
	}

</style>