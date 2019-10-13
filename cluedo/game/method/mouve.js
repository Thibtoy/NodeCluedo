const {characterMouve} = require('../class/character/method/characterMouve');

function mouve(game, code) {
	let player = game.currentPlayer,
		character = player.state.character;
		// if (event.keyCode === 13) {
		// 	window.removeEventListener('keydown', this.method.turnMethod.mouve);
		// 	this.method.nextTurn();
		// }
		if (player.state.mouve > 0) {
			characterMouve(code, game, (result, state) => {
				// if(result) {
				 player.state.mouve -= 1;
				 game.mouve = true;
				// 	if (state != 0) {
				// 		window.removeEventListener('keydown', this.method.turnMethod.mouve);
				// 		this.state.roomToEnter = state;
				// 		this.method.action('What do you want to do?', this.popUpList.roomChoice);
				// 		window.addEventListener('keydown', this.method.turnMethod.choice);
				// 	}
				// }
			});
		}
		else return false;
}

module.exports = {
	mouve: mouve
}