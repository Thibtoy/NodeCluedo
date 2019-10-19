export function mouve(event) {
	const token = sessionStorage.getItem('token');
	let code = event.keyCode;
	$.post('/mouve', {token, code}, (res) => {
	})
	// let code = event.keyCode;
	// console.log(code);
}