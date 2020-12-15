<template>
	<v-container class="fill-height">
		<form
			class="mx-auto text-center"
			width="500px"
		>
			<v-row>
				<v-col>
					<h1 class="mb-5">Account</h1>
					<img class="mb-4" src="../../assets/Backpack_icon.svg" alt="" width="72" height="72">
					<h3>Name: {{ this.user.name }}</h3>
					<h3>Email: {{ this.user.email }}</h3>
					<v-container>
						<v-btn
							class="px-0"
							text
							color="error"
							@click="logout"
							>
							Logout
						</v-btn>
					</v-container>
				</v-col>
			</v-row>
		</form>
	</v-container>
</template>

<script>
import { axios } from '@/common/app.js';

export default {
	methods: {
		logout() {
			axios.post('logout')
			.then((response) => {
				if (response.data.success) {
					this.$store.dispatch('setMessage', {"message": "logged out", "error": false});
					this.$store.dispatch('setUser', null);
					this.$router.push('/');
				}
			})
			.catch(err => {
				console.log('logout error' + err);
			});
		},
	},
	computed: {
		user() {
			return this.$store.state.user;
		}
	}

}
</script>

<style>
	.logout-link {
		text-decoration: none;
	}

</style>