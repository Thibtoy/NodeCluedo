const splitedUrl = window.location.pathname.split('/');
const id = splitedUrl[(splitedUrl.length - 1)];

function jwtDecode(t) {
  let token = {};
  token.raw = t;
  token.header = JSON.parse(window.atob(t.split('.')[0]));
  token.payload = JSON.parse(window.atob(t.split('.')[1]));
  return (token.payload)
}

const token = sessionStorage.getItem('token');

setInterval(function() {
	$.post('/connectGame', {token}, function(data){
		if (!data.connected) console.log(false);
		else window.location.pathname = '/game/'+token
	})
}, 100);