const {Character} = require('../class/character.js');
const {Player} = require('../class/player.js');


const DIRECTION = {
	"DOWN": 0,
	"LEFT": 1,
	"RIGHT": 2,
	"TOP": 3
}

function setPlayers(game) {
	let character1 = new Character("mmeLeblanc", 9, 0, DIRECTION.DOWN);
	let character2 = new Character("drOlive", 0, 17, DIRECTION.RIGHT);
	game.state.players.push(new Player(character1, 'Thibault'));
	game.state.players.push(new Player(character2, 'Arnaud'));
	for (let i = 0, l = game.state.players.length; i < l; i++) {
		game.state.players[i].state.evidenceList = new Object();
		for (let type in game.state.cards) {
			game.state.players[i].state.evidenceList[type] = new Array();
			for (let j = 0, k = game.state.cards[type].length; j < k; j++) {
				let item = {name: game.state.cards[type][j], evidence: 0};
				game.state.players[i].state.evidenceList[type].push(item);
			}
		}
	}
}

module.exports = {
	setPlayers: setPlayers
}

// frontUpstairs.addCharacter(new Character("characterTileset", 14, 0, 4, 0));
// frontUpstairs.addCharacter(new Character("characterTileset", 23, 6, 10, 5));
// frontUpstairs.addCharacter(new Character("characterTileset", 23, 19, 4, 5));
// frontUpstairs.addCharacter(new Character("characterTileset", 7, 24, 7, 3));