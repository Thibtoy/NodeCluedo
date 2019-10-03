const splitedUrl = window.location.pathname.split('/');
const id = splitedUrl[(splitedUrl.length - 1)];

window.onload = function() {
	$.post('/getGame/'+id, function(data) {
		if(!data) console.log('err');
		else console.log(data);
	});
}

// // game.method.createPopUpList();

// console.log(game);
// window.onload = game.method.displayGame();
console.log('coucou');