//initial UI elements
let gameBoard = document.querySelector('#game-board');
let lengthButton = document.querySelector('#length-btn');
lengthButton.addEventListener('click', onWordLengthSubmit);

//game parameters
let wordLength = 0;
let guessesLeft = 10;
let wordComplete = false;
let workingLibrary = [];
let workingLibKey = '';
let guessList = [];

function onWordLengthSubmit() {
	wordLength = document.getElementById('word-length').value;

	//generate initial working library key
	for (let i = 0; i < wordLength; i++) {
		workingLibKey += '_'
	}

	//filter dictionary to include only words of specified length
	dictionary.forEach(word => {
		if (word.length == wordLength) {
			workingLibrary.push(word);
		}
	});

	//update UI
	gameBoard.innerHTML = '';
	let outputContainer = document.createElement('div');
	let outputText = document.createElement('h3');
	let guessInput = document.createElement('input');
	let guessButton = document.createElement('button');
	let guessesLeftContainer = document.createElement('div');
	let guessLeftText = document.createElement('h4');
	let guessDisplay = document.createElement('h4');
	let libraryContainer = document.createElement('div');
	let showLibraryBtn = document.createElement('button');
	let libraryDisplay = document.createElement('div');

	outputText.innerText = displayWorkingKey();
	guessInput.type = 'text';
	guessInput.placeholder = "guess letter here...";
	guessButton.innerText = "Guess";
	guessLeftText.innerText = "Guesses Left: " + guessesLeft;
	guessDisplay.innerText = 'Guess List: [ ' + guessList.toString() + ' ]';
	showLibraryBtn.innerText = "Hint: show working library";
	libraryDisplay.innerText = formatWorkingLibrary();
	libraryDisplay.style.display = 'none';

	outputText.id = 'output-text';
	guessInput.id = 'guess-input';
	guessButton.id = 'guess-btn';
	guessDisplay.id = 'guess-display';
	guessLeftText.id = 'guess-left-text';
	showLibraryBtn.id = 'show-library-btn';
	libraryDisplay.id = 'library-display';

	showLibraryBtn.addEventListener('click', toggleLibraryDisplay);
	guessButton.addEventListener('click', onGuessSubmit);

	outputContainer.appendChild(outputText);
	guessesLeftContainer.appendChild(guessLeftText);
	gameBoard.appendChild(outputContainer);
	gameBoard.appendChild(guessInput);
	gameBoard.appendChild(guessButton);
	gameBoard.appendChild(guessesLeftContainer);
	gameBoard.appendChild(guessDisplay);

	libraryContainer.appendChild(showLibraryBtn);
	libraryContainer.appendChild(libraryDisplay);
	gameBoard.appendChild(libraryContainer);
}

function toggleLibraryDisplay() {
	let display = document.getElementById('library-display');
	if (display.style.display === "none") {
		display.style.display = "block";
	  } else {
		display.style.display = "none";
	  }
}

function formatWorkingLibrary() {
	let libraryStr = '';
	workingLibrary.forEach(word => {
		libraryStr += word + '\n';
	});
	return libraryStr;
}

function onGuessSubmit() {
	let guessedLetter = document.getElementById('guess-input').value;
	guessedLetter = guessedLetter.toLowerCase();

	//sort library into sub-libraries and choose largest library
	guessList.push(guessedLetter);
	let libraries = generateLibraries(guessedLetter);
	[workingLibKey, workingLibrary] = findBestLibrary(guessedLetter, libraries);

	//handle guesses remaining and win conditions
	guessesLeft -= 1;
	if (workingLibrary.length == 1 && isWordComplete()) {
		finishGame(true);
		return;
	}
	if (guessesLeft <=0) {
		finishGame(false);
		return;
	}
	updateGameBoard();
}

function generateLibraries(guessedLetter) {
	let libraries = {};
	workingLibrary.forEach(word => {
		let wordKey = createKeyForWord(guessedLetter, word);
		if (wordKey in libraries) {
			libraries[wordKey].push(word);
		} else {
			libraries[wordKey] = [word];
		}
	});
	return libraries;
}

function createKeyForWord(guessedLetter, word) {
	//NOTE: we assume here that all words are of the provided word length
	let key = '';
	for (let i = 0; i < wordLength; i++) {
		if (isAlphabetic(workingLibKey.charAt(i))) {
			key += workingLibKey.charAt(i);
		} else {
			if (word.charAt(i) === guessedLetter) {
				key += guessedLetter;
			} else {
				key += '_';
			}
		}
	}
	return key;
}

function isAlphabetic(str) {
	return str.length === 1 && str.match(/[a-z]/i);
}

function findBestLibrary(guessedLetter, libraries) {
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
			let libKeyGuessIndex = libKey.indexOf(guessedLetter);
			let bestLibKeyGuessIndex = bestLibKey.indexOf(guessedLetter);

			if (libKeyGuessIndex < 0 && bestLibKeyGuessIndex >= 0) {
				bestLibrary = libraries[libKey];
				bestLibKey = libKey;
			}

			//third qualifier - find library who's key contains the guess the least number of times
			else if (libKeyGuessIndex >= 0 && bestLibKeyGuessIndex >= 0) {
				let libKeyGuessCount = libKey.split(guessedLetter).length - 1;
				let bestLibKeyGuessCount = bestLibKey.split(guessedLetter).length - 1;

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
}

function isWordComplete() {
	if (workingLibKey.indexOf('_') < 0) {
		return true;
	}
}

function updateGameBoard() {
	document.getElementById('guess-input').value = '';
	let outputText = document.getElementById('output-text');
	let guessDisplay = document.getElementById('guess-display');
	let guessLeftText = document.getElementById('guess-left-text');
	let libraryDisplay = document.getElementById('library-display');

	outputText.innerText = displayWorkingKey();
	guessLeftText.innerText = "Guesses Left: " + guessesLeft;
	guessDisplay.innerText = 'Guess List: [ ' + guessList.toString() + ' ]';
	libraryDisplay.innerText = formatWorkingLibrary();
}

function displayWorkingKey() {
	let output = '';
	for (let i = 0; i < workingLibKey.length; i++) {
		output += workingLibKey.charAt(i) + '  ';
	}
	return output;
}

function finishGame(gameWon) {
	let outputText = document.createElement('h2');
	let resetText = document.createTextNode('Would you like to play again?');
	let yesBtn = document.createElement('button');

	if (gameWon) {
		outputText.innerText = "YOU WON!? How is this possible..."
	} else {
		outputText.innerText = "YOU LOST"
	}

	yesBtn.innerText = 'Yes';
	yesBtn.addEventListener('click', () => location.reload());

	gameBoard.innerHTML = '';
	gameBoard.appendChild(outputText);
	gameBoard.appendChild(resetText);
	gameBoard.appendChild(yesBtn);
}



