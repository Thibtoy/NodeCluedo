export function createPopUpList(game) {
	game.state.selectedPopUpChoice = 0;
	game.popUpList = new Object();

	// for (let type in this.state.cards) {
	// 	let list = [];
	// 	let that = this;
	// 	for (let i = 0, l = this.state.cards[type].length; i < l; i++) {
	// 		if (this.state.cards[type][i] != 1) {
	// 			list.push({
	// 				title: this.state.cards[type][i], 
	// 				method: () => {
	// 					this.state.currentPlayer.state.accusation[type] = this.state.cards[type][i];
	// 					this.state.selectedPopUpChoice = 0;
	// 					if (type === 'suspect') {
	// 						this.method.action('Which weapon?', this.popUpList.weapon);
	// 						window.addEventListener('keydown', this.method.turnMethod.choice);
	// 					}
	// 					else if (type === 'weapon') {
	// 						this.method.action('Where?', this.popUpList.room);
	// 						window.addEventListener('keydown', this.method.turnMethod.choice);
	// 					}
	// 					else this.method.turnMethod.verifySuspicion(function (truth, player) {
	// 						if (truth) console.log('success');
	// 						else {
	// 							that.method.showPopUp(player.state.name+' will show you an evidence card (so don\'t cheat and tell him before to press enter!)');
	// 							//add event listener 
	// 						}
	// 					});
	// 				}
	// 			});
	// 		}
	// 	}
	// 	this.popUpList[type] = list;
	// }

	// this.popUpList.roomChoice = [
	// 	{
	// 		title:'Enter',
	// 		method: () => {
	// 			let room = this.state.roomIndex['room'+this.state.roomToEnter];
	// 			let placed = false;
	// 			this.state.selectedPopUpChoice = 0;
	// 			for (let i = 0, l = room.length; i < l; i++) {
	// 				if(room[i].empty && !placed) {
	// 					let state = this.state.currentPlayer.state.character.state;
	// 					room[i].empty = false;
	// 					placed = true;
	// 					state.x = room[i].x;
	// 					state.y = room[i].y;
	// 					state.direction = 0;
	// 				}
	// 			}
	// 			this.method.nextTurn();
	// 		},
	// 	},
	// 	{
	// 	 	title:'Continue',
	// 	 	method: () => {
	// 	 		this.state.selectedPopUpChoice = 0
	// 	 		window.addEventListener('keydown', this.method.turnMethod.mouve);
	// 	 	}
	// 	},
	// 	{
	// 		title: 'Accuse',
	// 		method: () => {
	// 			let room = this.state.roomIndex['room'+this.state.roomToEnter]
	// 			let placed = false;
	// 			this.state.selectedPopUpChoice = 0;
	// 			this.method.action('Who is the suspect?', this.popUpList.suspect);
	// 			window.addEventListener('keydown', this.method.turnMethod.choice);
	// 		},
	// 	}
	// ];
}