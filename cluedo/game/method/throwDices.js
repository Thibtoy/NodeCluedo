export function throwDices(event) {
	let player = this.state.currentPlayer;
	if(event.keyCode === 13) {
			this.method.removePopUp();
			player.throwDice(2);		
			this.method.showPopUp('Jet de dés: '+ player.state.dices[0] +', '+ player.state.dices[1]+'.');
			window.removeEventListener('keydown', this.method.turnMethod.throwDices);
			window.addEventListener('keydown', this.method.turnMethod.startTurn);
		}
}