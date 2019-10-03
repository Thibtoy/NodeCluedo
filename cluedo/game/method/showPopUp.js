export function showPopUp(content, list = [], selected = 0) {
	let popUp = this.state.popUp;
		popUp.visibility = true;
		popUp.content = content;
		popUp.list = this.popUpList.currentList = list;
		popUp.selected = selected
}