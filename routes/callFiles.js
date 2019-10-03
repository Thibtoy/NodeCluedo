module.exports = function(app) {
	const filesController = require('../controller/filesController');

	app.route(/cluedo/)
		.get(filesController.file);
}