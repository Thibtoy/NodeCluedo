module.exports = function(app) {
	const gameController = require('../controller/gameController');
	gameController.game = gameController.game.bind(app.Store);
	gameController.findAlobby = gameController.findAlobby.bind(app.Store);
	gameController.lobby = gameController.lobby.bind(app.Store);
	gameController.connectGame = gameController.connectGame.bind(app.Store);
	gameController.getGame = gameController.getGame.bind(app.Store);
	gameController.loadedBug = gameController.loadedBug.bind(app.Store);

	app.route('/')
		.get(gameController.home);

	app.route('/game/:token')
		.get(gameController.game);

	app.route('/findAlobby')
		.post(gameController.findAlobby);

	app.route('/connectGame')
		.post(gameController.connectGame);

	app.route('/lobby/:id')
		.get(gameController.lobby);

	app.route('/getGame/:token')
		.post(gameController.getGame);

	app.route('/loadedBug/:token')
		.post(gameController.loadedBug)
}