let app = new Vue({
	//configurations for new instance of Vue
	el: '#app',
	data: {
		startGame: false,
		playerName: '',
		guesses: [],
		guess: null
	}
})