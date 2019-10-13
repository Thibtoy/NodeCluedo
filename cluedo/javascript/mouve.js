export function mouve(event) {
	const token = sessionStorage.getItem('token');
	let code = event.keyCode;
	$.post('/mouve', {token, code}, (res) => {
		console.log(this.state.players[0].state.character.state);
	})
	// let code = event.keyCode;
	// console.log(code);
}