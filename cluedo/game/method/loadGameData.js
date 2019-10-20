const fs = require('fs');
const {handleObstacle} = require('./obstacle.js');
const {Character} = require('../class/character.js');

const DIRECTION = {
	"DOWN": 0,
	"LEFT": 1,
	"RIGHT": 2,
	"TOP": 3
}

const path = (process.env.PORT)? 'https://s3.amazonaws.com/clue-game' : '../cluedo/game';

function loadGameData(game) {
	return new Promise((resolve, reject) => {
		game.state.characters = new Array();
		fs.exists('./cluedo/game/data/data.json', function(exist) {
			if (!exist) reject('file not found?');
			fs.readFile('./cluedo/game/data/data.json', function(err, data) {
				if (err) {
					reject(err);
				}
				data = JSON.parse(data);
				for (let type in data) {
					if (type === 'characters') {
						for (let i = 0, n = data[type].length; i < n; i++) {
							let character = data[type][i];
							game.state[type].push(new Character(path, character.name, character.x, character.y, DIRECTION[character.direction]))
						}
					}
					else game.state[type] = data[type];
				}
				var characterField = new Array();
				characterField = handleObstacle(characterField, game.state.groundMap.field, [1,2,3,4,5,6,7]);
				characterField = handleObstacle(characterField, game.state.wallMap.field, [13]);
				game.state.characterMap = {tileset: 'groundTileset', field: characterField};
				resolve(game);
			});
		});
	});
}

module.exports = {
	loadGameData: loadGameData
}