export function displayGame() {
	const state = this.state;
	state.canva = document.getElementById('Canva');
	state.ctx = state.canva.getContext('2d');

	state.canva.width = state.groundMap.getWidth()*32;
	state.canva.height = state.groundMap.getHeight()*32;

	setInterval(() => {
		state.groundMap.drawMap(state.ctx);
		state.wallMap.drawMap(state.ctx);
		state.upstairMap.drawMap(state.ctx);
		state.characterMap.drawMap(state.ctx);
		if (this.state.popUp.visibility) {
			this.method.drawPopUp();
		}	
	}, 30);

	this.method.playerTurn();
}