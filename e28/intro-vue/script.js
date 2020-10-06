let app = new Vue({
	//configurations for new instance of Vue
	el: '#app',
	data: {
		startGame: false,
		playerName: '',
		guesses: [],
		guess: null,
		check: {
			one: 1,
			two: '2'
		},
		myArr: [1, 2]
	}
})