//Vue App at the bottom of file

var dictionary = [
	"a",
	"aa",
	"aaa",
	"aaron",
	"ab",
	"abandoned",
	"abc",
	"aberdeen",
	"abilities",
	"ability",
	"able",
	"aboriginal",
	"abortion",
	"about",
	"above",
	"abraham",
	"abroad",
	"abs",
	"absence",
	"absent",
	"absolute",
	"absolutely",
	"absorption",
	"abstract",
	"abstracts",
	"abu",
	"abuse",
	"ac",
	//.... (a lot more words)
];

// ERROR COMPONENT
Vue.component('error-display', {
	template: `
		<div><slot></slot></div>
	`,
});

// WORKING LIBRARY COMPONENT
Vue.component('working-library', {
	props: {
		workingLibrary: Array
	},
	template: `
		<div>
			<h3>Possible Words</h3>
			<div class='library-list'>
				<div v-for='word in workingLibrary'>
					{{ word }}
				</div>
			</div>
		</div>
	`,
});

// SCOREBOARD COMPONENT
Vue.component('score-board', {
	props: {
		playerScore: Number,
		computerScore: Number,
		gameHistory: Array
	},
	template: `
		<div>
			<h4>Scoreboard</h4>
			<div class="scoreboard-container">

				<div class="scoreboard-item">
					<div>You</div>
					<div class='game-won'> {{ playerScore }} </div>
				</div>

				<div class="scoreboard-item">
					<div>Computer</div>
					<div class='game-lost'> {{ computerScore }} </div>
				</div>
			</div>

			<h4>Game Win History</h4>
			<div v-if='gameHistory.length !== 0'>
				<div v-for='item in gameHistory'>
					<div>{{ item.text }}</div>
				</div>
			</div>
			<div v-if='gameHistory.length === 0' class='scoreboard-history-none'>
				No Games Have Been Played Yet...
			</div>
		</div>
	`,
});

// MAIN APP COMPONENT
const app = new Vue({
	el: '#app',
    data: {
		//game-wide data
		gameStates: {
			GAME_START: 'gameStart',
			GAME_RUNNING: 'game running',
			GAME_LOST: 'game lost',
			GAME_WON: 'game won'
		},
		gameState: undefined,
		mainTitle: 'Welcome To Evil Hangman',
		playerScore: 0,
		computerScore: 0,
		gameHistory: [],
		showWorkingLibrary: false,
		workingLibraryButtonText: 'Hint: See Possible Words',
		gameOverMsg: '',
		//start game data
		wordLength: '',
		guessAmount: '',
		//working library data
		workingKey: '',
		workingLibrary: [],
		startingLibrary: dictionary,
		//guess data
		guessInput:'',
		guessList: [],
		//error data
		errorPresent: false,
		errorMessage: ''
	},
	computed: {
		displayKey() {
			let output = '';
			for (let i = 0; i < this.workingKey.length; i++) {
				output += this.workingKey.charAt(i) + '  ';
			}
			return output;
		},
		guess() {
			return this.guessInput.toLowerCase();
		},
		formattedLibrary() {
			let libraryStr = '';
			this.workingLibrary.forEach(word => {
				libraryStr += word + '\n';
			});
			return libraryStr;
		},
		formattedGuessList() {
			let guessStr = '';
			this.guessList.forEach(letter => {
				guessStr += letter + '  ';
			});
			return guessStr;
		},
		gameStart() {
			return this.gameState === this.gameStates.GAME_START;
		},
		gameRunning() {
			return this.gameState === this.gameStates.GAME_RUNNING;
		},
		gameWon() {
			return this.gameState === this.gameStates.GAME_WON;
		},
		gameLost() {
			return this.gameState === this.gameStates.GAME_LOST;
		}
	},
    methods: {
		startGame: function() {
			if (!this.validateStartGame()) {
				wordLength = '';
				guessAmount = ''
				this.errorPresent = true;
				this.errorMessage = 'please enter valid values for both fields';
				this.displayError();
				return;
			}
			this.resetError();
			this.generateWorkingKey();
			this.workingLibrary = this.workingLibrary.filter(word => word.length === Number(this.wordLength));
			this.gameState = this.gameStates.GAME_RUNNING;
			this.mainTitle = 'Can you guess my word...?';
		},

		resetError: function() {
			this.errorPresent = false;
			this.errorMessage = '';
		},

		displayError: function() {
			return;
		},

		validateStartGame: function() {
			if (!Number(this.wordLength) || !Number(this.guessAmount)) {
				return false;
			}
			if (this.wordLength === '' || this.guessAmount === '') {
				return false;
			}
			if (Number(this.wordLength) > 18 || Number(this.wordLength) < 0 || Number(this.guessAmount) < 0) {
				return false;
			}
			return true;
		},

		validateGuess: function() {
			if (this.guessInput === '' || !this.isAlpha(this.guessInput)|| this.guessInput.length != 1) {
				return false;
			}
			return true;
		},

		isAlpha: function (str) {
			return str.length === 1 && str.match(/[a-z]/i);
		},

		makeGuess: function() {
			if (!this.validateGuess()) {
				this.guessInput = '';
				this.errorPresent = true;
				this.errorMessage = 'please enter a valid guess';
				this.displayError();
				return;
			}

			//clear any prior errors
			this.errorPresent = false;
			this.errorMessage = '';

			//save guess
			this.guessList.push(this.guess);

			//handle library generation
			let libraries = this.generateLibraries(this.guess);
			[this.workingKey, this.workingLibrary] = this.findBestLibrary(libraries);

			//check for game finished
			this.checkForEndGame();

			//clear guess for next guess
			this.guessInput = '';
		},

		checkForEndGame: function() {
			//handle guesses remaining, win conditions, and score board stats
			this.guessAmount -= 1;
			if (this.workingLibrary.length == 1 && this.isWordComplete()) {
				if (this.showWorkingLibrary) {
					this.toggleLibrary();
				}
				this.gameState = this.gameStates.GAME_WON;
				this.playerScore += 1;
				this.gameHistory.push({
					playerWon: true,
					text: 'Player'
				});
				this.mainTitle = 'YOU WON!';
				this.gameOverMsg = "Grrr... Would you like to play again?";
			}
			if (this.guessAmount <= 0) {
				if (this.showWorkingLibrary) {
					this.toggleLibrary();
				}
				this.gameState = this.gameStates.GAME_LOST;
				this.mainTitle = 'You Lost!'
				this.gameOverMsg = "Mwahaha... Would you like to play again?"
				this.computerScore += 1;
				this.gameHistory.push({
					playerWon: false,
					text: 'Computer'
				});
			}
		},

		generateWorkingKey: function() {
			for (let i = 0; i < this.wordLength; i++) {
				this.workingKey += '_'
			}
		},

		generateLibraries: function() {
			let libraries = {};
			this.workingLibrary.forEach(word => {
				let wordKey = this.createKeyForWord(word);
				if (wordKey in libraries) {
					libraries[wordKey].push(word);
				} else {
					libraries[wordKey] = [word];
				}
			});
			return libraries;
		},

		createKeyForWord: function (word) {
			//NOTE: we assume here that all words are of the provided word length
			let key = '';
			for (let i = 0; i < this.wordLength; i++) {
				if (this.isAlpha(this.workingKey.charAt(i))) {
					key += this.workingKey.charAt(i);
				} else {
					if (word.charAt(i) === this.guess) {
						key += this.guess;
					} else {
						key += '_';
					}
				}
			}
			return key;
		},

		findBestLibrary: function(libraries) {
			let bestLibrary = [];
			let bestLibKey = '';
			for (libKey in libraries) {

				//first qualifier - find library with most reminaing words
				if (libraries[libKey].length > bestLibrary.length) {
					bestLibrary = libraries[libKey];
					bestLibKey = libKey;
				}

				//second qualifier - find library who's key does not contain guess
				else if (libraries[libKey].length == bestLibrary.length) {
					let libKeyGuessIndex = libKey.indexOf(this.guess);
					let bestLibKeyGuessIndex = bestLibKey.indexOf(this.guess);

					if (libKeyGuessIndex < 0 && bestLibKeyGuessIndex >= 0) {
						bestLibrary = libraries[libKey];
						bestLibKey = libKey;
					}

					//third qualifier - find library who's key contains the guess the least number of times
					else if (libKeyGuessIndex >= 0 && bestLibKeyGuessIndex >= 0) {
						let libKeyGuessCount = libKey.split(this.guess).length - 1;
						let bestLibKeyGuessCount = bestLibKey.split(this.guess).length - 1;

						if (libKeyGuessCount < bestLibKeyGuessCount) {
							bestLibrary = libraries[libKey];
							bestLibKey = libKey;
						}

						//last qualifier - find library who's key contains right-most first occurence of guess
						else if (libKeyGuessCount == bestLibKeyGuessCount) {
							if (libKeyGuessIndex > bestLibKeyGuessIndex) {
								bestLibrary = libraries[libKey];
								bestLibKey = libKey;
							}
						}
					}
				}
			}
			return [bestLibKey, bestLibrary];
		},

		isWordComplete: function() {
			if (this.workingKey.indexOf('_') < 0) {
				return true;
			}
		},

		resetToStart: function() {
			this.mainTitle = 'Welcome To Evil Hangman';
			this.gameState = this.gameStates.GAME_START;
			this.workingLibrary = this.startingLibrary;
			this.workingKey = '';
			this.showWorkingLibrary = false;
			this.guessAmount = '';
			this.wordLength = '';
			this.guessList = [];
			this.guessInput = '';
			this.errorPresent = false;
			this.errorMessage = '';
		},

		resetScoreboard: function() {
			this.playerScore = 0;
			this.computerScore = 0;
			this.gameHistory = [];
		},

		toggleLibrary: function() {
			this.showWorkingLibrary = !this.showWorkingLibrary;
			this.workingLibraryButtonText = this.showWorkingLibrary ? 'Hide Possible Words' : 'Hint: See Possible Words';
		}
	},
	mounted: function() {
		this.gameState = this.gameStates.GAME_START;
		this.workingLibrary = this.startingLibrary;
	}
});

