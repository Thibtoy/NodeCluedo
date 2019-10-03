const {initGame} = require('../cluedo/game/method/initGame');
const {cardDistribution} = require('../cluedo/game/method/cardDistribution');
const {setEvidenceList} = require('../cluedo/game/method/setEvidenceList');
const jwt = require('jsonwebtoken')
const SECRET = 'lesecret';

exports.home = function(req, res) {
	res.sendFile('./test.html', {root: './cluedo'});
}

exports.game = function(req, res) {
	let decoded = jwt.verify(req.params.token, SECRET);
	let game = this.inGame[decoded.id]
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
		let token = jwt.sign({id: game.id, player: (game.state.connected)}, SECRET)
		res.status(200).send(token);
	}
	if (newGame) {
		let game = JSON.parse(JSON.stringify(this.gameModel));
		initGame(game);
		cardDistribution(game);
		setEvidenceList(game);
		this.inGame[game.id] = game;
		let token = jwt.sign({id: game.id, player: (game.state.connected)}, SECRET)
		res.status(200).send(token);
	}
}

exports.connectGame = function(req, res) {
	let decoded = jwt.verify(req.body.token, SECRET);
	if (this.inGame[decoded.id].state.connected > 1) {
		res.status(200).send({connected: true});
	}
	else res.status(200).send(false);
}

exports.getGame = function(req, res) {
	let decoded = jwt.verify(req.params.token, SECRET)
	let game = this.inGame[decoded.id];
	if (game) {
		res.status(200).send(this.inGame[decoded.id])
	}
	else res.status(200).send(false);
}

exports.loadedBug = function(req, res) {
	let decoded = jwt.verify(req.params.token, SECRET)
	this.inGame[decoded.id].state.players[decoded.player].loaded = true;
	res.status(200).send(true);
}