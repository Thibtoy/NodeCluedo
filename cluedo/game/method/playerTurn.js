function playerTurn(game) {
		game.currentPlayer = game.state.players[game.state.turn];
		game.step = 1;
		game.popUp = true;
		game.popUpContent = 'tour de '+game.currentPlayer.state.name;
}

module.exports = {
	playerTurn: playerTurn
}