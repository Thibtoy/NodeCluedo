import {Tileset} from './tileset.js';

export class Map {
	constructor(tileset, field) {
		this.state = {
			tileset: new Tileset('../cluedo/game/assets/tilesets/'+tileset+'.png'),
			field: field,
			characters: new Array(),
		}
	}

	getHeight = () => {
		return this.state.field.length;
	}

	getWidth = () => {
		return this.state.field[0].length;
	}

	addCharacter = perso => {
		this.state.characters.push(perso);
	}

	drawMap = context => {
		for (let i = 0, l = this.state.field.length; i < l; i++){
			let line = this.state.field[i];
			let y = i*32;
			for(var j = 0, k = line.length ; j < k ; j++) {
				let x = j*32;
				this.state.tileset.drawTile(line[j], context, x, y);
			}
		}
		for(let i = 0, l = this.state.characters.length; i < l; i++) {
			this.state.characters[i].drawCharacter(context);
		}
	}
}