import {tchatSystem} from './tchat.js';

const splitedUrl = window.location.pathname.split('/');
const id = splitedUrl[(splitedUrl.length - 1)];

function jwtDecode(t) {
  let token = {};
  token.raw = t;
  token.header = JSON.parse(window.atob(t.split('.')[0]));
  token.payload = JSON.parse(window.atob(t.split('.')[1]));
  return (token.payload)
}

const token = sessionStorage.getItem('token');

var previousState = {
	tchat: new Array(),
	players: new Array(),
};

var GO = document.getElementById('GO'),
	ready = false;

var ul = document.getElementById('PlayerList');

GO.addEventListener('click', function() {
	ready = (!ready)? true : false;
});

var update = false;

// var tchatList = document.getElementById('TchatList');

setInterval(function() {
	if (!update) {
		update = true;
		$.post('/connectGame', {token, ready}, function(data){
			if (!data.connected) {
				for (let i = 0, n = data.players.length; i < n; i++) {
					if (!previousState.players[i]) ul.appendChild(listItem(data.players, i));
					else if (previousState.players[i].ready != data.players[i].ready) ul.replaceChild(listItem(data.players, i), document.getElementById('Li'+i));
				}
				previousState.players = data.players;
				update = false;
			}
			else window.location.pathname = '/game';
		});
	}
}, 400);

tchatSystem(token);

function listItem(players, i) {
	let li = document.createElement('li');
	let img = (players[i].ready)? '../cluedo/game/assets/icons/check.svg' : '../cluedo/game/assets/icons/uncheck.svg';
	li.setAttribute('id', 'Li'+i);
	li.innerHTML = players[i].state.name+'<img class="readyImg" src='+img+'>'
	return li;
}