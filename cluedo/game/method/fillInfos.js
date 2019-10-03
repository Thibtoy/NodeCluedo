export function fillInfos() {
	let clueList = document.getElementById('ClueList');
	let evidenceList = document.getElementById('EvidenceList');
	let playerState = this.state.players[this.state.turn].state;
	clueList.innerHTML = "";
	evidenceList.innerHTML = "";
	for (let i = 0, l = playerState.hand.length; i < l; i++) {
		clueList.innerHTML += '<p>'+playerState.hand[i]+',</p>'
	}
	for (let type in playerState.evidenceList) {
		for (let i = 0, l = playerState.evidenceList[type].length; i < l; i++) {
			let line = (playerState.evidenceList[type][i].evidence === 2)? '<p style="text-decoration: line-through;">'+playerState.evidenceList[type][i].name+',</p>' : '<p>'+playerState.evidenceList[type][i].name+'</p>';
			evidenceList.innerHTML += line;
		}
	}
}