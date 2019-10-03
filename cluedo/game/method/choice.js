export function choice(event) {
	let currentList = this.popUpList.currentList;
	switch (event.keyCode) {
			case 13:
				window.removeEventListener('keydown', this.method.turnMethod.choice);
				this.method.removePopUp();
				currentList[this.state.selectedPopUpChoice].method();
				break;
			case 37:
				this.method.turnMethod.select(false, currentList); 
				break;
			case 39:
				this.method.turnMethod.select(true, currentList);
				break;
		}
}