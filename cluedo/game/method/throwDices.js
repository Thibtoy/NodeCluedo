export function throwDices() {
	window.removeEventListener('keydown', this.throwDices);
	//let player = game.state.players[game.state.turn];
	const token = sessionStorage.getItem('token');
	$.post('/throwDices', {token}, function(res) {
		console.log(res);
	})
	//player.throwDice(2);		
	//this.showPopUp('Jet de dés: '+ player.state.dices[0] +', '+ player.state.dices[1]+'.');
	//window.removeEventListener('keydown', this.throwDices);
	//window.addEventListener('keydown', this.method.turnMethod.startTurn);
}