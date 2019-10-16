export function throwDices() {
	const token = sessionStorage.getItem('token');
	let that = this;
	window.removeEventListener('keydown', this.throwDices);
	$.post('/throwDices', {token}, function(res){
		window.addEventListener('keydown', that.mouve);
	})
}