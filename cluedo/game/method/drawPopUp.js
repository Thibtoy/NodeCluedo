export function drawPopUp() {
	let state = this.state;
	state.ctx.fillStyle = 'white';
	state.ctx.fillRect(((state.canva.width / 2) - 80), ((state.canva.height / 2) - 80), 192, 128);
	state.ctx.lineWidth = 3;
	state.ctx.strokeStyle = 'blue';
	state.ctx.strokeRect(((state.canva.width / 2) - 80), ((state.canva.height / 2) - 80), 192, 128);
	state.ctx.fillStyle = 'black';
	state.ctx.textAlign = 'center';
	state.ctx.fillText(state.popUp.content, (((state.canva.width / 2)-64) + 80), ((state.canva.height / 2) - 64));
	if (state.popUp.list.length > 0) {
		let yAside = 0;
		for (let i = 0, l = state.popUp.list.length; i < l; i++) {
			let xPos = i%3;
			if (i != 0 && i%3 === 0) yAside += 20;
			state.ctx.fillText(state.popUp.list[i].title, (((state.canva.width/2)-64)+((192/ 3)*xPos)+((192-(3*50))/(3+1))), (((state.canva.height/2)-64)+64+yAside) )
			if (state.popUp.selected === i) {
				state.ctx.lineWidth = 2;
				state.ctx.strokeStyle = 'blue';
			}
			else {
				state.ctx.lineWidth = 0.5;
				state.ctx.strokeStyle = 'black';
			}
			state.ctx.strokeRect((((state.canva.width/2)-64)+((192/ 3)*xPos)+((192-(3*50))/(3+1))-25), (((state.canva.height/2)-64)+64-8+yAside), 50, 10)
		}
	}
}