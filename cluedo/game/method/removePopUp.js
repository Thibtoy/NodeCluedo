export function removePopUp() {
	let popUp = this.state.popUp;
		delete popUp.visibility;			
		delete popUp.selected;
		delete popUp.content;
		delete popUp.list;
}