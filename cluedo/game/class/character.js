class Character {
	constructor(path, url, x, y, direction) {
		this.state = {
			x: x,
			y: y,
			direction: direction,
			etatAnimation: -1,
		}
		this.src = path+"/assets/characterSprites/"+url+".png";
	}
}

module.exports = {
	Character: Character
}