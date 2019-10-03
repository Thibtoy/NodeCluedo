function copyArray(array) {
	let copy = new Array();
		for (let i = 0, l = array.length; i < l; i++){
			copy[i] = array[i];
		}
		return copy;
}

module.exports = {
	copyArray: copyArray
}