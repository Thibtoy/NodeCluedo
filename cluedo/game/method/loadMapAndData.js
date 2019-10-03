import {Map} from '../class/map.js';
import {handleObstacle} from '../method/obstacle.js';
import {drawCharacter} from '../method/drawCharacter.js';

export function loadMapAndData(game) {
	game.map = new Object();
	for (let type in game.state) {
		if (game.state[type].tileset) {
			game.map[type] = new Map(game.state[type].tileset, game.state[type].field);
		}
		continue;
	}
	var characterField = new Array();
	characterField = handleObstacle(characterField, game.map.groundMap.state.field, [1,2,3,4,5,6,7]);
	characterField = handleObstacle(characterField, game.map.wallMap.state.field, [13]);
	game.map.characterMap = new Map('groundTileset', characterField);
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
		character.drawCharacter = drawCharacter.bind(character)
		game.map.characterMap.addCharacter(character);
	}
}