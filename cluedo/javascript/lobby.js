const splitedUrl = window.location.pathname.split('/');
const id = splitedUrl[(splitedUrl.length - 1)];

setInterval(function() {
	$.post('/connectGame/'+id, function(data){
		if (!data.connected) console.log(false);
		else window.location.pathname = data.path;
	})
}, 100);