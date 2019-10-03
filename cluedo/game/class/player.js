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

	throwDice = (nb, callBack) => {
		let results = new Array();

		for (let i = 0, l = nb; i < l; i++){ 
			results.push(Math.ceil(Math.random()*6));			
		}

		for (let i = 0, l = nb; i < l; i++){
			if (results[i] === 1 || results[i] === 6) {
				for (let j = 0; j < l; j++){
					if (j === i) continue;
					if (results[j] === results[i]) {
						this.state.double = true;
					}
				}
			}
			this.state.mouve += results[i];
		}
		return this.state.dices = results;
	}

	makeAccusation = (accusation, game) => {
		this.state.accusation = true;
		if (accusation === game.truth) console.log('gameEnd');
		else console.log('nextTurn');
	}
}

module.exports = {
	Player: Player
}