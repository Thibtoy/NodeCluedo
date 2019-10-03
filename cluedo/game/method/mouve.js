export function mouve(event) {
	let player = this.state.currentPlayer,
		character = player.state.character;
		if (event.keyCode === 13) {
			window.removeEventListener('keydown', this.method.turnMethod.mouve);
			this.method.nextTurn();
		}
		else if (player.state.mouve > 0) {
			character.mouve(event.keyCode, this.state.characterMap, this, (result, state) => {
				if(result) {
					player.state.mouve -= 1;
					if (state != 0) {
						window.removeEventListener('keydown', this.method.turnMethod.mouve);
						this.state.roomToEnter = state;
						this.method.action('What do you want to do?', this.popUpList.roomChoice);
						window.addEventListener('keydown', this.method.turnMethod.choice);
					}
				}
			});
		}
		else return false;
}