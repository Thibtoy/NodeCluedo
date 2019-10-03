export function handleObstacle(characterField, layoutField, walkable) {
	if (characterField.length === 0) {
		for (let i = 0, l = layoutField.length; i < l; i++) {
			let row = new Array();
			for(let j = 0, k = layoutField[i].length; j < k; j++) {
				let toPush = 9;
				for (let n = 0, m = walkable.length; n < m; n++) {
					if (layoutField[i][j] === walkable[n]) toPush = 8;
				}
				row.push(toPush);
			}
		characterField.push(row);
		}
	}
	else {
		for (let i = 0, l = layoutField.length; i < l; i++) {
			for(let j = 0, k = layoutField[i].length; j < k; j++) {
				let condition = false;
				for (let n = 0, m = walkable.length; n < m; n++) {
					if (layoutField[i][j] === walkable[n]) condition = true;
				}
				if (condition && characterField[i][j] != 9) characterField[i][j] = 8;
				else characterField[i][j] = 9;
			}
		}
	}
	return characterField;
}