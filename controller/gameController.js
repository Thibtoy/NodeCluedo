const {initGame} = require('../cluedo/game/method/initGame');
const {cardDistribution} = require('../cluedo/game/method/cardDistribution');
const {setEvidenceList} = require('../cluedo/game/method/setEvidenceList');

exports.home = function(req, res) {
	res.sendFile('./test.html', {root: './cluedo'});
}

exports.game = function(req, res) {
	let game = this.inGame[req.params.id]
	if (!game.state.started) game.state.started = true;
	res.sendFile('./index.html', {root: './cluedo'});
}

exports.lobby = function(req, res) {
	let game = this.inGame[req.params.id];
	if (game && game.state.connected < 6) {
		game.state.connected += 1;
		res.sendFile('./templates/lobby.html', {root: './'});
	}
	else res.redirect('/');
}

exports.findAlobby = function(req, res) {
	let newGame = true
	for (let type in this.inGame) {
		let game = this.inGame[type];
		if(game.state.connected >= 6 || game.state.started) continue;
		newGame = false;
		res.status(200).send(game)
	}
	if (newGame) {
		let game = JSON.parse(JSON.stringify(this.gameModel));
		initGame(game);
		cardDistribution(game);
		setEvidenceList(game);
		this.inGame[game.id] = game;
		res.status(200).send(game)
	}
}

exports.connectGame = function(req, res) {
	if (this.inGame[req.params.id].state.connected > 1) {
		res.status(200).send({connected: true, path:"/game/"+req.params.id});
	}
	else res.status(200).send(false);
}

exports.getGame = function(req, res) {
	if (this.inGame[req.params.id]) res.status(200).send(this.inGame[req.params.id]);
	else res.status(200).send(false);
}

// exports.lobby = function(req, res) {

// }