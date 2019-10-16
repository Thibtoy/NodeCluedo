export function removeEventListener (step) {
	switch (step) {
		case 3: 
			window.removeEventListener('keydown', this.mouve)
			break;
			
		default:
			break;
	}
}