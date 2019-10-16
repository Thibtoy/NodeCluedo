import {Map} from '../class/map.js';
import {drawCharacter} from '../method/drawCharacter.js';

export function loadMapAndData(game) {
	game.map = new Object();
	for (let type in game.state) {
		if (game.state[type].tileset) {
			game.map[type] = new Map(game.state[type].tileset, game.state[type].field);
		}
		continue;
	}
	for (let i = 0, l = game.state.players.length; i < l; i++) {
		let character = game.state.players[i].state.character;
		console.log(character);
		character.image = new Image();
		character.image.src = character.src
		character.image.ref = character;
		character.image.onload = function() {
			if(!this.complete) throw "Erreur de chargement du sprite Character";
			this.ref.width = this.width / 3;
			this.ref.height = this.height / 4;
		}
		game.map.characterMap.addCharacter(character);
		character.drawCharacter = drawCharacter.bind(character)
	}
}