export function update(token, game) {
	$.post('/getGame', {token}, function(updated) {
		if (updated.popUp && !game.state.popUp.visibility) game.showPopUp(updated.popUpContent)
		else if (!updated.popUp) game.removePopUp();
	});
}