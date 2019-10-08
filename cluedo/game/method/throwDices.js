function throwDices(player, nb) {
	let results = new Array();

		for (let i = 0, l = nb; i < l; i++){ 
			results.push(Math.ceil(Math.random()*6));			
		}

		for (let i = 0, l = nb; i < l; i++){
			if (results[i] === 1 || results[i] === 6) {
				for (let j = 0; j < l; j++){
					if (j === i) continue;
					if (results[j] === results[i]) {
						player.state.double = true;
					}
				}
			}
			player.state.mouve += results[i];
		}
		return player.state.dices = results;
}

module.exports = {
	throwDices: throwDices
}