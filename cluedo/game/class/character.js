// const DIRECTION = {
// 	40: 0,
// 	37: 1,
// 	39: 2,
// 	38: 3
// }

// const DUREE_ANIMATION = 3;
// const DUREE_DEPLACEMENT = 9;

class Character {
	constructor(url, x, y, direction) {
		this.state = {
			x: x,
			y: y,
			direction: direction,
			etatAnimation: -1,
		}
		//this.image = new Image();
		this.src = "./cluedo/game/assets/characterSprites/"+url+".png";
		// this.image.referenceDuPerso = this;
		// this.image.onload = function() {
		// 	if(!this.complete) throw "Erreur de chargement du sprite Character";
		// 	this.referenceDuPerso.width = this.width / 3;
		// 	this.referenceDuPerso.height = this.height / 4;
		// }
	}

// 	drawCharacter = (context) => {
// 		let state = this.state;
// 		let frame = 1; // Numéro de l'image à prendre pour l'animation
// 		let decalageX = 0, decalageY = 0; // Décalage à appliquer à la position du personnage
// 		if(state.etatAnimation >= DUREE_DEPLACEMENT) {
// 	// Si le déplacement a atteint ou dépassé le temps nécessaire pour s'effectuer, on le termine
// 		this.state.etatAnimation = -1;
// } else if(state.etatAnimation >= 0) {
// 	// On calcule l'image (frame) de l'animation à afficher
// 	frame = Math.floor(state.etatAnimation / DUREE_ANIMATION);
// 	if(frame > 2) {
// 		frame %= 3;
// 	}
	
// 	// Nombre de pixels restant à parcourir entre les deux cases
// 	var pixelsAParcourir = 32 - (32 * (state.etatAnimation / DUREE_DEPLACEMENT));
	
// 	// À partir de ce nombre, on définit le décalage en x et y.
// 	// NOTE : Si vous connaissez une manière plus élégante que ces quatre conditions, je suis preneur
// 	if(state.direction === 3) {
// 		decalageY = pixelsAParcourir;
// 	} else if(state.direction === 0) {
// 		decalageY = -pixelsAParcourir;
// 	} else if(state.direction === 1) {
// 		decalageX = pixelsAParcourir;
// 	} else if(state.direction === 2) {
// 		decalageX = -pixelsAParcourir;
// 	}
	
// 	this.state.etatAnimation++;
// 	}

//  * Si aucune des deux conditions n'est vraie, c'est qu'on est immobile, 
//  * donc il nous suffit de garder les valeurs 0 pour les variables 
//  * frame, decalageX et decalageY
 

// 		context.drawImage(
// 			this.image,
// 			frame*this.width, state.direction*this.height,
// 			this.width, this.height,
// 			(state.x * 32) + decalageX, (state.y * 32) + decalageY,
// 			this.width, this.height,
// 		);
// 	}

// 	getNextPosition = direction => {
// 		let coord = {x: this.state.x, y: this.state.y};
// 		switch(direction) {
// 			case 0: 
// 				coord.y++;
// 				break;
// 			case 1:
// 				coord.x--;
// 				break;
// 			case 2:
// 				coord.x++;
// 				break;
// 			case 3:
// 				coord.y--;
// 				break;
// 		}
// 		return coord;
// 	}

// 	mouve = (code, map, game, callBack) => {
// 		let state = 0
// 		if (this.state.etatAnimation >= 0) return callBack(false);
// 		if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
// 			let direction = DIRECTION[code];
// 			let nextPos = this.getNextPosition(direction);
// 			this.state.direction = direction
// 			if (nextPos.x < 0 || nextPos.y < 0 || nextPos.x >= map.getWidth() || nextPos.y >= map.getHeight()) {
// 				return callBack(false)
// 			}
// 			else if (game.state.roomField[nextPos.y][nextPos.x] != 0) state = game.state.roomField[nextPos.y][nextPos.x];
// 			else if (map.state.field[nextPos.y][nextPos.x] === 9) return callBack(false);
// 			this.state.etatAnimation = 1;
// 			this.state.x = nextPos.x;
// 			this.state.y = nextPos.y;
// 			return callBack(true, state);
// 		}
// 	}
}

module.exports = {
	Character: Character
}