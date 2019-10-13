export function update(token, game) {
	$.post('/getGame', {token}, function(updated) {
		for (let i = 0, l = game.state.players.length; i < l; i++) {
			game.state.players[i].state.character.state = updated.state.players[i].state.character.state;
		}
		if ((updated.popUp && !game.state.popUp.visibility) || (game.popUpContent != updated.popUpContent && game.state.popUp.visibility)) {
			game.showPopUp(updated.popUpContent);
		}
		else if (!updated.popUp) game.removePopUp();
	});
}