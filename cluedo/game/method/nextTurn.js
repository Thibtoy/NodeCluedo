const {playerTurn} = require('./playerTurn');

function nextTurn(game) {
	game.currentPlayer.state.mouve = 0;
	game.lastStep = game.step;
	game.step = 0;
	game.state.turn++
	if (game.state.turn >= game.state.players.length) game.state.turn = 0;
	game.newTurn = true;
}

module.exports = {
	nextTurn: nextTurn
}