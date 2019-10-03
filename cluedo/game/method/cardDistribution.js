function cardDistribution(game) {
	let state = game.state;
		for (let l = state.library.length, i = (l-1), j = 0, n = state.players.length; i >= 0; i--) {
			if (j >= n) j = 0;
			state.players[j].state.hand.push(state.library[i]);
			state.library.splice(i, 1);
			j++
		}
}

module.exports = {
	cardDistribution: cardDistribution
}