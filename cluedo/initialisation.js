import {loadMapAndData} from './game/method/loadMapAndData.js';
import {displayGame} from './game/method/displayGame.js';

const token = sessionStorage.getItem('token');
function jwtDecode(t) {
  		let token = {};
  		token.raw = t;
  		token.header = JSON.parse(window.atob(t.split('.')[0]));
  		token.payload = JSON.parse(window.atob(t.split('.')[1]));
  		return (token.payload)
	}

const decoded = jwtDecode(token);

window.onload = function() {
	$.post('/getGame/'+token, function(data) {
		if(!data) console.log('err');
		else {
			let game = data;
			game.owner = game.state.players[decoded.player]
			loadMapAndData(game);
			displayGame(game);
		}
	});
}

// // game.method.createPopUpList();

// console.log(game);
// window.onload = game.method.displayGame();
console.log('coucou');