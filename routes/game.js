module.exports = function(app) {
	const gameController = require('../controller/gameController');
	gameController.game = gameController.game.bind(app.Store);
	gameController.findAlobby = gameController.findAlobby.bind(app.Store);
	gameController.lobby = gameController.lobby.bind(app.Store);
	gameController.connectGame = gameController.connectGame.bind(app.Store);
	gameController.getGame = gameController.getGame.bind(app.Store);
	gameController.loadedBug = gameController.loadedBug.bind(app.Store);
	gameController.listenGame = gameController.listenGame.bind(app.Store);
	gameController.throwDices = gameController.throwDices.bind(app.Store);
	gameController.mouve = gameController.mouve.bind(app.Store);
	gameController.animation = gameController.animation.bind(app.Store);
	gameController.tchat = gameController.tchat.bind(app.Store);
	gameController.getTchat = gameController.getTchat.bind(app.Store);
	gameController.updateGame = gameController.updateGame.bind(app.Store);
	gameController.test = gameController.test.bind(app.Store);

	app.route('/')
		.get(gameController.home);

	app.route('/game')
		.get(gameController.game);

	app.route('/findAlobby')
		.post(gameController.findAlobby);

	app.route('/connectGame')
		.post(gameController.connectGame);

	app.route('/lobby/:id')
		.get(gameController.lobby);

	app.route('/getGame')
		.post(gameController.getGame);

	app.route('/updateGame')
		.post(gameController.updateGame)

	app.route('/listenGame')
		.post(gameController.listenGame)

	app.route('/throwDices')
		.post(gameController.throwDices)

	app.route('/mouve')
		.post(gameController.mouve)

	app.route('/animation')
		.post(gameController.animation)

	app.route('/loadedBug/:token')
		.post(gameController.loadedBug)

	app.route('/tchat')
		.post(gameController.tchat)

	app.route('/getTchat')
		.post(gameController.getTchat)

	app.route('/test')
		.post(gameController.test)

}