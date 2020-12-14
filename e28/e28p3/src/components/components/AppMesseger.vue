<template>
	<v-container>
		<v-snackbar v-if="!this.error" v-model="okSnackbar">
			<div>{{ this.message }}</div>
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

		<v-snackbar v-else v-model="errorSnackbar">
			<div>{{ this.message }}</div>
			<template v-slot:action="{ attrs }">
				<v-btn
				color="error"
				text
				v-bind="attrs"
				@click="snackbar = false"
				>
				Close
				</v-btn>
			</template>
		</v-snackbar>
	</v-container>
</template>

<script>
export default {
	props: ['message', 'error'],
	data: function() {
		return {
			okSnackbar: false,
			errorSnackbar: false,
		}
	}
}
</script>

<style>

</style>