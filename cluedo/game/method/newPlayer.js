const {Player} = require('../class/player.js');

function newPlayer(game, name) {
	let player = new Player(game.state.characters[game.state.connected], name);
	player.state.evidenceList = new Object();
	for (let type in game.state.cards) {
		player.state.evidenceList[type] = new Array();
		for (let j = 0, k = game.state.cards[type].length; j < k; j++) {
			let item = {name: game.state.cards[type][j], evidence: 0};
			player.state.evidenceList[type].push(item);
		}
	}
	game.state.players.push(player)
}

module.exports = {
	newPlayer: newPlayer
}