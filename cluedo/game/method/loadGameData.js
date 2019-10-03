const fs = require('fs');

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
				resolve(game);
			});
		});
	});
}

module.exports = {
	loadGameData: loadGameData
}