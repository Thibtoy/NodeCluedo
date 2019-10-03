export function select(increase, list) {
	let selected = this.state.selectedPopUpChoice;
	if (increase) {
			selected++
			if (selected >= list.length) selected = 0;
		}
		else {
			selected--
			if (selected < 0) selected = list.length-1;
		}
		this.state.selectedPopUpChoice = selected;
		this.method.action('blabla', list, selected);
} 