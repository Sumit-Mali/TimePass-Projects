let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

// This function take the name and chips amount from the user and also starts the game.
function startGame() {
	var playerEl = prompt('Please enter your name');
	var amountEl = prompt('Please enter the bet amount');
	if (playerEl != null) {
		document.getElementById('player-el').textContent =
			playerEl + ' $' + amountEl;
	}
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

// This function return a random number between 1 and 11
function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

// This function checks the whether player got the blackjack or not
function renderGame() {
	cardsEl.textContent = 'Cards: ';
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + ' ';
	}

	sumEl.textContent = 'Sum: ' + sum;
	if (sum <= 20) {
		message = 'Do you want to draw a new card?';
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}

// This function works for the new card.
function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		renderGame();
	}
}
