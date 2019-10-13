const fs = require('fs');
const {handleObstacle} = require('./obstacle.js');


function loadGameData(game) {
	return new Promise((resolve, reject) => {
		fs.exists('./cluedo/game/data/data.json', function(exist) {
			if (!exist) reject('file not found?');
			fs.readFile('./cluedo/game/data/data.json', function(err, data) {
				if (err) {
					reject(err);
				}
				data = JSON.parse(data);
				for (let type in data) {
					game.state[type] = data[type];
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