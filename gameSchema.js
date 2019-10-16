const {Game} = require('./cluedo/game/game');
const {loadGameData} = require('./cluedo/game/method/loadGameData');
const {setRoomIndex} = require('./cluedo/game/method/setRoomIndex');

function gameSchema () {
	return new Promise ((resolve, reject) => {
		var game = new Game();
		loadGameData(game).catch(err => reject(err))
							.then(game => {
								setRoomIndex(game);
								resolve(game);
							})
		})	
};

module.exports = {
	gameSchema: gameSchema
}