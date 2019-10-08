//const {Method} = require('./class/method');

class Game {
	constructor() {
		this.state = {
			connected: 0,			
			library: new Array(),
			players: new Array(),
			popUp: new Object(),
			truth: new Object(),
			turn: 0,		
		};
		this.step = 0;
		// this.method = new Method(this);
	}
}

module.exports = {
	Game:Game
}