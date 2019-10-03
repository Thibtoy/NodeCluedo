export function startTurn(event) {
	if (event.keyCode === 13) {
			window.removeEventListener('keydown', this.method.turnMethod.startTurn);
			this.method.removePopUp();			
			window.addEventListener('keydown', this.method.turnMethod.mouve);
		}
}