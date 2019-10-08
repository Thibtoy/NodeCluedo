function playerTurn(game) {
	if (game.step === 0) {
		game.currentPlayer = game.state.players[game.state.turn];
		game.step = 1;
		game.popUp = true;
		game.popUpContent = 'tour de '+game.currentPlayer.state.name;
	}
};

module.exports = {
	playerTurn: playerTurn
}