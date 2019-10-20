import {loadMapAndData} from './game/method/loadMapAndData.js';
import {displayGame} from './game/method/displayGame.js';
import {listenGame} from './game/method/listenGame.js';
import {showPopUp} from './game/method/showPopUp.js';
import {removePopUp} from './game/method/removePopUp.js';
import {drawPopUp} from './game/method/drawPopUp.js';
import {createPopUpList} from './game/method/createPopUpList.js';
import {throwDices} from './javascript/throwDices.js';
import {mouve} from './javascript/mouve.js';
import {removeEventListener} from './javascript/removeEventListener.js';
import {tchatSystem} from './javascript/tchat.js';

const token = sessionStorage.getItem('token') || 'token';

function jwtDecode(t) {
  		let token = {};
  		token.raw = t;
  		token.header = JSON.parse(window.atob(t.split('.')[0]));
  		token.payload = JSON.parse(window.atob(t.split('.')[1]));
  		return (token.payload)
	}

const decoded = (token === 'token')? token : jwtDecode(token);

window.onload = function() {
	$.post('/getGame', {token}, function(data) {
		if(!data) window.location.pathname = '/';
		else {
			let game = data;
			game.showPopUp = showPopUp.bind(game);
			game.removePopUp = removePopUp.bind(game);
			game.drawPopUp = drawPopUp.bind(game);
			game.throwDices = throwDices.bind(game);
			game.mouve = mouve.bind(game);
			game.removeEventListener = removeEventListener.bind(game);
			game.owner = game.state.players[decoded.player];
			game.turnOn = false;
			//tchatSystem(token);
			loadMapAndData(game);
			createPopUpList(game);
			displayGame(game);
			if (game.owner.loaded) listenGame(token, game);
		}
	});
}