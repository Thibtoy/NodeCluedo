export function verifySuspicion(callback) {
	let accusation = this.state.currentPlayer.state.accusation;
	this.state.evidenceCards = new Object();
	for (let type in accusation) {
		let count = this.state.turn+1;
		for (let i = 0, l = this.state.players.length; i < l; i++) {
			count = (count >= l)? 0 : count;
			let player = this.state.players[count];
			let getEvidence = false;
			if (player === this.state.currentPlayer) continue;
			for (let j = 0, k = player.state.evidenceList[type].length; j < k; j++) {
				if (accusation[type] === player.state.evidenceList[type][j].name) {
					this.state.evidenceCards[type] = accusation[type];
					getEvidence = true;	
				}
			}
			if (getEvidence) {
				return callback(false, player);
			}
			else if (!getEvidence && i >= l) {
				return callback(true);
			}
		}
	}
}