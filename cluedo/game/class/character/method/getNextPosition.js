function getNextPosition (direction, character) {
 		let coord = {x: character.state.x, y: character.state.y};
 		switch(direction) {
 			case 0: 
 				coord.y++;
 				break;
 			case 1:
 				coord.x--;
 				break;
 			case 2:
 				coord.x++;
 				break;
 			case 3:
 				coord.y--;
 				break;
 		}
 		return coord;
 	}

module.exports = {
	getNextPosition: getNextPosition
}