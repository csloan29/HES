<template>
	<v-container v-if="this.message != null">
		<v-snackbar v-if="!this.message.error" v-model="okSnackbar">
			<div>{{ this.message.message }}</div>
			<template v-slot:action="{ attrs }">
				<v-btn
				color="accent"
				text
				v-bind="attrs"
				@click="okSnackbar = false"
				>
				Close
				</v-btn>
			</template>
		</v-snackbar>

		<v-snackbar v-else v-model="errorSnackbar">
			<div>{{ this.message.message }}</div>
			<template v-slot:action="{ attrs }">
				<v-btn
				color="error"
				text
				v-bind="attrs"
				@click="errorSnackbar = false"
				>
				Close
				</v-btn>
			</template>
		</v-snackbar>
	</v-container>
</template>

<script>
export default {
	data: function() {
		return {
			okSnackbar: false,
			errorSnackbar: false,
		}
	},
	computed: {
		message() {
			return this.$store.state.messageData;
		},
	},
	watch: {
		message: function() {
			if (this.message != null) {
				if (this.message.error) {
					this.errorSnackbar = true;
				} else {
					this.okSnackbar = true;
				}
			}
		},
		okSnackbar: function() {
			if (this.okSnackBar == false) {
				this.$store.dispatch('resetMessage');
			}
		},
		errorSnackbar: function() {
			if (this.errorSnackbar == false) {
				this.$store.dispatch('resetMessage');
			}
		}

	}
}
</script>

<style>

</style>