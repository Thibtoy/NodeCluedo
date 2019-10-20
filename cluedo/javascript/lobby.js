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
var playerList = new Array();

var GO = document.getElementById('GO'),
	ready = false;

var ul = document.getElementById('PlayerList');

GO.addEventListener('click', function() {
	ready = (!ready)? true : false;
});
var input = document.getElementById('TchatMessage');
document.getElementById('SendMessage').addEventListener('click', tchat);
var tchatList = document.getElementById('TchatList');

var tchatBox = document.getElementById('TchatBox');
tchatBox.addEventListener('click', selectTchatBox);
input.addEventListener('focus', function() {
	input.addEventListener('keydown', focus);
});
input.addEventListener('blur', function() {
	input.removeEventListener('keydown', focus);
})

setInterval(function() {
	$.post('/connectGame', {token, ready}, function(data){
		if (!data.connected) {
			for (let i = 0, n = data.players.length; i < n; i++) {
				if (!previousState.players[i]) ul.appendChild(listItem(data.players, i));
				else if (previousState.players[i].ready != data.players[i].ready) ul.replaceChild(listItem(data.players, i), document.getElementById('Li'+i));
			}
			for (let i = 0, n = data.tchat.length; i < n; i++) {
				if (!previousState.tchat[i]) tchatList.appendChild(tchatMessage(data.tchat[i], i));
			}
			previousState.tchat = data.tchat;
			previousState.players = data.players;

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

function tchatMessage(message, i) {
	let li = document.createElement('li');
	li.setAttribute('id', 'message'+i);
	li.innerHTML = message
	return li;
}

function tchat() {
	let message = input.value;
	input.value = "";
	if (message.length > 1) $.post('/tchat', {token, message});
}

function selectTchatBox(event) {
	let id = event.target.getAttribute('id');
	if (id != 'TchatMessage' && id != 'SendMessage') {
		tchatBox.removeEventListener('click', selectTchatBox);
		document.addEventListener('mousemove', move);
		tchatBox.addEventListener('click', removeMove)
	}
}

function move(event) {
	tchatBox.style.left = event.clientX-30+'px';
	tchatBox.style.top = event.clientY-10+'px';
}

function removeMove() {
	tchatBox.removeEventListener('click', removeMove);
	document.removeEventListener('mousemove', move);
	tchatBox.addEventListener('click', selectTchatBox);
}

function focus(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		tchat();
	}
}