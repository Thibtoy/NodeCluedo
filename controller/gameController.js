const {initGame} = require('../cluedo/game/method/initGame');
const {cardDistribution} = require('../cluedo/game/method/cardDistribution');
const {setEvidenceList} = require('../cluedo/game/method/setEvidenceList');
const {playerTurn} = require('../cluedo/game/method/playerTurn');
const {throwDices} = require('../cluedo/game/method/throwDices');
const {mouve} = require('../cluedo/game/method/mouve');
const {newPlayer} = require('../cluedo/game/method/newPlayer');
const jwt = require('jsonwebtoken')
const SECRET = 'lesecret';

exports.home = function(req, res) {
	res.sendFile('./test.html', {root: './cluedo'});
}

exports.game = function(req, res) {
	res.sendFile('./index.html', {root: './cluedo'});
}

exports.lobby = function(req, res) {
	let game = this.inGame[req.params.id];
	if (game) res.sendFile('./templates/lobby.html', {root: './'});
	else res.redirect('/');
}

exports.findAlobby = function(req, res) {
	let newGame = true
	for (let type in this.inGame) {
		let game = this.inGame[type];
		if(game.state.connected >= 6 || game.state.started) continue;
		newGame = false;
		newPlayer(game, req.body.name);
		let token = jwt.sign({id: game.id, player: (game.state.connected)}, SECRET);
		game.state.connected++;
		res.status(200).send(token);
	}
	if (newGame) {
		let game = JSON.parse(JSON.stringify(this.gameModel));
		initGame(game);
		newPlayer(game, req.body.name);
		this.inGame[game.id] = game;
		let token = jwt.sign({id: game.id, player: (game.state.connected)}, SECRET)
		game.state.connected++;
		res.status(200).send(token);
	}
}

exports.connectGame = function(req, res) {
	let decoded = jwt.verify(req.body.token, SECRET);
	let game = this.inGame[decoded.id];
	let player = game.state.players[decoded.player];
	let allReady = true;
	if (req.body.ready === 'true' && !player.ready) player.ready = true;
	if (req.body.ready === 'false' && player.ready) player.ready = false;
	for (let i = 0, n = game.state.players.length; i < n; i++) {
		if (!game.state.players[i].ready) allReady = false
	}
	if (game && ((game.state.connected > 1 && allReady) || game.state.connected > 5)) {
		cardDistribution(game);
		setEvidenceList(game);
		res.status(200).send({connected: true});
	}
	else res.status(200).send({players: game.state.players});
}

exports.getGame = function(req, res) {
	jwt.verify(req.body.token, SECRET, (err, decoded) => {
		if (err) res.status(200).send(false);
		else {
			let game = this.inGame[decoded.id];
			if (!game) res.status(200).send(false);
			else if (!game.state.started) game.state.started = true;
			res.status(200).send(game);
		}
	});
}

exports.updateGame = function(req, res) {
	jwt.verify(req.body.token, SECRET, (err, decoded) => {
		if (err) res.status(200).send(false);
		else {
			let game = this.inGame[decoded.id];
			if (!game) res.status(200).send(false);
			res.status(200).send({
				players: game.state.players, 
				newTurn: game.newTurn, 
				lastStep: game.lastStep,
				popUp: game.popUp,
				popUpContent: game.popUpContent,
				tchat: game.tchat,
			});
		}
	});
}

exports.listenGame = function(req, res) {
	let decoded = jwt.verify(req.body.token, SECRET)
	let game = this.inGame[decoded.id];
	if(!game) res.status(404);
	if (game.step === 0 && decoded.player === game.state.turn) playerTurn(game);
	if (decoded.player === game.state.turn) res.status(200).send({step: game.step});
	else res.status(200).send(false);
}

exports.throwDices = function(req, res) {
	let decoded = jwt.verify(req.body.token, SECRET)
	let game = this.inGame[decoded.id];
	if (decoded.player === game.state.turn && game.step === 1) {
		game.step = 2;
		throwDices(game.currentPlayer, 2);
		game.popUpContent = 'Jet de dés: '+ game.currentPlayer.state.dices[0]+
		    ', '+game.currentPlayer.state.dices[1]+'.';
		res.status(200).send(true);
	}
	else res.status(200).send('il ne faut pas tricher!')
}

exports.mouve = function(req, res) {
	jwt.verify(req.body.token, SECRET, (err, decoded) => {
		let game = this.inGame[decoded.id];
		if (game.popUp) game.popUp = false;
		if (!game.mouve) mouve(game, req.body.code);
		res.status(200).send(true);
	})
}

exports.animation = function(req, res) {
	jwt.verify(req.body.token, SECRET, (err, decoded) => {
		let game = this.inGame[decoded.id];
		let etatAnimation = game.state.players[decoded.player].state.character.state.etatAnimation
		if (game.mouve && decoded.player === game.state.turn) {
			game.state.players[decoded.player].state.character.state.etatAnimation += 1;
			if (etatAnimation >= 9) {
				game.state.players[decoded.player].state.character.state.etatAnimation = -1;
				game.mouve = false;
			}
		}
		res.status(200).send(true);
	});
}

exports.loadedBug = function(req, res) {
	let decoded = jwt.verify(req.params.token, SECRET)
	this.inGame[decoded.id].state.players[decoded.player].loaded = true;
	res.status(200).send(true);
}

exports.tchat = function(req, res) {
	let decoded = jwt.verify(req.body.token, SECRET);
	let game = this.inGame[decoded.id];
	game.tchat.push(' '+game.state.players[decoded.player].state.name+' - '+req.body.message);
	res.status(200).send(true);
}

exports.getTchat = function(req, res) {
	let decoded = jwt.verify(req.body.token, SECRET);
	let game = this.inGame[decoded.id];
	res.status(200).send(game.tchat);
}

exports.test = function(req, res) {
	let decoded = jwt.verify(req.body.token, SECRET);
	this.inGame[decoded.id].end = true;
	res.status(200).send(true);
}