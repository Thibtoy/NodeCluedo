let button = document.getElementById('GO');

button.onclick = function() {
	$.post('findAlobby', function(game) {
		if(!game) console.log('error');
		else {
		window.location.pathname = '/lobby/'+game.id;
		}
	})
}