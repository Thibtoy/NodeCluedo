export function throwDices() {
	const token = sessionStorage.getItem('token');
	let that = this;
	window.removeEventListener('keydown', this.throwDices);
	$.post('/throwDices', {token}, function(res){
		console.log('coucou');
		window.addEventListener('keydown', that.mouve);
	})
}