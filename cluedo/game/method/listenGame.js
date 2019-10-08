export function listenGame(token, game) {
		$.post('/listenGame', {token}, function(res) {
				switch (res.step) {
				case 1:	window.addEventListener('keydown', game.throwDices);
						break;

				default: break;
				}
		});
}