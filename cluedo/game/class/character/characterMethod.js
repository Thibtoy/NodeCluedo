const {getNextPosition} = require('./method/getNextPosition');
const {mouve} = require('./method/mouve');

class characterMethod {
	constructor(character) {
		this.getNextPosition = getNextPosition.bind(character);
		this.mouve = mouve.bind(character);
	}
}

module.exports = {
	characterMethod: characterMethod
}