export function tchatMessage(message, i) {
	let li = document.createElement('li');
	li.setAttribute('id', 'message'+i);
	li.innerHTML = message
	return li;
}