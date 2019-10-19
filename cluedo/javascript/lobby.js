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

var previousState = new Array();
var playerList = new Array();

var GO = document.getElementById('GO'),
	ready = false;

var ul = document.getElementById('PlayerList');

GO.addEventListener('click', function() {
	ready = (!ready)? true : false;
});

setInterval(function() {
	$.post('/connectGame', {token, ready}, function(data){
		if (!data.connected) {
			for (let i = 0, n = data.players.length; i < n; i++) {
				if (!previousState[i]) ul.appendChild(listItem(data.players, i));
				else if (previousState[i].ready != data.players[i].ready) ul.replaceChild(listItem(data.players, i), document.getElementById('Li'+i));
			}
			previousState = data.players;
		}
		else window.location.pathname = '/game'
	})
}, 100);

function listItem(players, i) {
	let li = document.createElement('li');
	let img = (players[i].ready)? '../cluedo/game/assets/icons/check.svg' : '../cluedo/game/assets/icons/uncheck.svg';
	li.setAttribute('id', 'Li'+i);
	li.innerHTML = players[i].state.name+'<img class="readyImg" src='+img+'>'
	return li;
}