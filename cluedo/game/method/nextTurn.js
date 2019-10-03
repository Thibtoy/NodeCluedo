export function nextTurn() {
	this.state.currentPlayer.state.mouve = 0;
		this.state.turn++
		if (this.state.turn >= this.state.players.length) this.state.turn = 0;
		this.method.playerTurn();
}