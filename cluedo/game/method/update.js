import {listenGame} from './listenGame.js';
import {tchatMessage} from '../../javascript/tchatMessage.js';

var tchatList = document.getElementById('TchatList');

export function update(token, game) {
	game.updatePlay = true;
	$.post('/updateGame', {token}, function(updated) {
		for (let i = 0, l = game.state.players.length; i < l; i++) {
			game.state.players[i].state.character.state = updated.players[i].state.character.state;
		}
		for (let i = 0, n = updated.tchat.length; i < n; i++) {
			if (!game.tchat[i]) tchatList.appendChild(tchatMessage(updated.tchat[i], i));
		}
		game.tchat = updated.tchat;
		if (updated.newTurn) {
			game.removeEventListener(updated.lastStep);
			listenGame(token, game);
		}
		if ((updated.popUp && !game.state.popUp.visibility) || (game.popUpContent != updated.popUpContent && updated.popUp)) {
			game.showPopUp(updated.popUpContent);
		}
		else if (!updated.popUp) game.removePopUp();
	});
}