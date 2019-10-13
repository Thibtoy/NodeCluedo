const {getNextPosition} = require('./getNextPosition');

const DIRECTION = {
	40: 0,
	37: 1,
	39: 2,
	38: 3
}

function getSize(field) {
	return field.length;
}

function characterMouve(code, game, callBack) {
		let state = 0;
		let character = game.currentPlayer.state.character;
		let map = game.state.characterMap;
		if (character.state.etatAnimation >= 0) return callBack(false);
		if (code === '37' || code === '38' || code === '39' || code === '40') {
			let direction = DIRECTION[code];
			let nextPos = getNextPosition(direction, character);
			character.state.direction = direction
			if (nextPos.x < 0 || nextPos.y < 0 || nextPos.x >= getSize(map.field[0].length) || nextPos.y >= getSize(map.field.length)) {
				return callBack(false)
			}
			else if (game.state.roomField[nextPos.y][nextPos.x] != 0) state = game.state.roomField[nextPos.y][nextPos.x];
			else if (map.field[nextPos.y][nextPos.x] === 9) return callBack(false);
			character.state.etatAnimation = 1;
			character.state.x = nextPos.x;
			character.state.y = nextPos.y;
			return callBack(true, state);
		}
	}

module.exports = {
	characterMouve: characterMouve
}