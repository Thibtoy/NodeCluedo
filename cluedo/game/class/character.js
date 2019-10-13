class Character {
	constructor(url, x, y, direction) {
		this.state = {
			x: x,
			y: y,
			direction: direction,
			etatAnimation: -1,
		}
		this.src = "../cluedo/game/assets/characterSprites/"+url+".png";
	}
}

module.exports = {
	Character: Character
}