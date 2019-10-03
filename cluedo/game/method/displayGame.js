export function displayGame(game) {
	const state = game.state;
	const map = game.map;
	state.canva = document.getElementById('Canva');
	state.ctx = state.canva.getContext('2d');

	state.canva.width = map.groundMap.getWidth()*32;
	state.canva.height = map.groundMap.getHeight()*32;

	const token = sessionStorage.getItem('token');

	
	console.log(game)

	function loadedBug() {
		$.post('/loadedBug/'+token, function() {
			setTimeout(() => document.location.reload(), 1)
		})
	}

	setInterval(() => {
		if (!game.owner.loaded) {
			loadedBug()	
		}
		map.groundMap.drawMap(state.ctx);
		map.wallMap.drawMap(state.ctx);
		map.upstairMap.drawMap(state.ctx);
		map.characterMap.drawMap(state.ctx);
		// if (this.state.popUp.visibility) {
		// 	this.method.drawPopUp();
		// }	
	}, 30);

	//this.method.playerTurn();
}