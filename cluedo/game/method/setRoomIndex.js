function setRoomIndex(game) {
	let state = game.state;
	state.roomIndex = new Object();
	for (let i = 0, l = state.placementField.length; i < l; i++) {
		let line = state.placementField[i];
		for (let j = 0, k = line.length; j < k; j++) {
			if (line[j] != 0) {
				if (state.roomIndex['room'+line[j]]) state.roomIndex['room'+line[j]].push({x: j, y: i, empty: true});
				else {
					state.roomIndex['room'+line[j]] = new Array();
					state.roomIndex['room'+line[j]].push({x: j, y: i, empty: true});
				}
			}
		}
	}
}

module.exports = {
	setRoomIndex: setRoomIndex
}