function jwtDecode(t) {
  let token = {};
  token.raw = t;
  token.header = JSON.parse(window.atob(t.split('.')[0]));
  token.payload = JSON.parse(window.atob(t.split('.')[1]));
  return (token.payload)
}

let button = document.getElementById('GO');

button.onclick = function() {
	$.post('findAlobby', function(token) {
		if(!token) console.log('error');
		else {
			let decoded = jwtDecode(token);
			sessionStorage.setItem('token', token)
			window.location.pathname = '/lobby/'+decoded.id;
		}
	})
}