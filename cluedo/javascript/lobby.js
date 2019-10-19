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

GO.addEventListener('click', () => {
	ready = (!ready)? true : false;
});

setInterval(function() {
	$.post('/connectGame', {token, ready}, function(data){
		if (!data.connected) {
			if (previousState != data.players) {
				for (let i = 0, n = data.players.length; i < n; i++) {
					if (!previousState[i]) playerList.push(listItem(data.players, i));
					else if (previousState[i] != data.players[i]) playerList[i] = listItem(data.players, i);

				}
			}
		}
		else window.location.pathname = '/game'
	})
}, 100);

function listItem(players, i) {
	if (!document.getElementById('Li'+i)) {
		let li = document.createElement('li');
		li.setAttribute('id', 'Li'+i);
		li.innerHTML = players[i].state.name;
		ul.appendChild(li);
	}
}