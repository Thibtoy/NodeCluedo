function randomPick(array, pile) {
	for(let i = 0, l = array.length; i < l; i++) {
		let index = Math.floor(Math.random()*array.length);
		pile.push(array[index]);
		array.splice(index, 1);
	}
}

module.exports = {
	randomPick: randomPick
}