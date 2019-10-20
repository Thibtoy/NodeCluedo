export function tchatSystem(token) {
	var input = document.getElementById('TchatMessage');
	var tchatBox = document.getElementById('TchatBox');
	var tchatList = document.getElementById('TchatList');
	var previousState = new Array();

	tchatBox.addEventListener('click', selectTchatBox);

	input.addEventListener('focus', function() {
		input.addEventListener('keydown', focus);
	});

	input.addEventListener('blur', function() {
		input.removeEventListener('keydown', focus);
	})

	document.getElementById('SendMessage').addEventListener('click', tchat);

	setInterval(function() {
		$.post('/getTchat', {token}, function(tchat) {
			for (let i = 0, n = tchat.length; i < n; i++) {
				if (!previousState[i]) tchatList.appendChild(tchatMessage(tchat[i], i));
			}
			previousState = tchat;
		})
	})

	function tchat() {
		let message = input.value;
		input.value = "";
		if (message.length > 1) $.post('/tchat', {token, message});
	}

	function tchatMessage(message, i) {
		let li = document.createElement('li');
		li.setAttribute('id', 'message'+i);
		li.innerHTML = message
		return li;
	}

	function selectTchatBox(event) {
		event.stopPropagation();
		let id = event.target.getAttribute('id');
		if (id != 'TchatMessage' && id != 'SendMessage') {
			tchatBox.removeEventListener('click', selectTchatBox);
			document.addEventListener('mousemove', move);
			document.addEventListener('click', removeMove)
		}
	}

	function move(event) {
		tchatBox.style.left = event.clientX-40+'px';
		tchatBox.style.top = event.clientY-20+'px';
	}

	function removeMove(event) {
		event.stopPropagation();
		document.removeEventListener('click', removeMove);
		document.removeEventListener('mousemove', move);
		tchatBox.addEventListener('click', selectTchatBox);
	}

	function focus(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			tchat();
		}
	}
}