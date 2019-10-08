export function throwDices() {
	const token = sessionStorage.getItem('token');
	window.removeEventListener('keydown', this.throwDices);
	$.post('/throwDices', {token}, function(res){
		console.log(res)
	})
}