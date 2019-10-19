const {copyArray} = require('./copyArray');
const {randomPick} = require('./randomPick');
const crypto = require('crypto');

function initGame(game) {
	let state = game.state;
	let copy = {};
	let shuffled = new Array();
	game.id = crypto.randomBytes(30).toString('hex');
	game.date = Date.now();
	for (let type in state.cards) {
		copy[type] = copyArray(state.cards[type]);
	}
	for (let type in copy) {
		let index = Math.floor(Math.random()*copy[type].length);
		state.truth[type] = copy[type][index];
		copy[type].splice(index, 1);
	}
	for (let type in copy) {
		randomPick(copy[type], state.library);
	}
	randomPick(state.library, shuffled);
	state.library = shuffled;
}

module.exports = {
	initGame: initGame
}