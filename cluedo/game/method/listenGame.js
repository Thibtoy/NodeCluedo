export function listenGame(token, game) {
		$.post('/listenGame', {token}, function(res) {
			switch (res.step) {
				case 1:	
					window.addEventListener('keydown', game.throwDices);
					break;
				case 2: 
					window.addEventListener('keydown', game.mouve);
					break;
				case 3: 
					window.addEventListener('keydown', game.mouve);
					break;
				default: 
					break;
				}
		});
}