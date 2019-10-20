import {Map} from '../class/map.js';
import {drawCharacter} from '../method/drawCharacter.js';

export function loadMapAndData(game) {
	const path = (window.location.origin != 'http://localhost:8000')? 'https://clue-game.s3.eu-west-3.amazonaws.com' : '../cluedo/game';
	game.map = new Object();
	for (let type in game.state) {
		if (game.state[type].tileset) {
			game.map[type] = new Map(path, game.state[type].tileset, game.state[type].field);
		}
		continue;
	}
	for (let i = 0, l = game.state.players.length; i < l; i++) {
		let character = game.state.players[i].state.character;
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