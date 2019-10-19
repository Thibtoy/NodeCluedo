class Player {
	constructor(character, name = "John") {
		this.loaded = false;
		this.state = {
			character: character,
			name: name,
			hand: new Array(),
			double: false,
			dices: new Array(),
			mouve: 0,
			accusation: {
				suspect:'',
				room:'',
				weapon:'',
			},
		}
	}
}

module.exports = {
	Player: Player
}