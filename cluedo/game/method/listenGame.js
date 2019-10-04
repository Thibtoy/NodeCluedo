export function listenGame(token, game) {
		$.post('/listenGame', {token}, function(main) {
			if (main)  window.addEventListener('keydown', game.throwDices);
		});
}