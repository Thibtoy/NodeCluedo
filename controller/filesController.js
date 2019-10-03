const fs = require('fs');
const path = require('path');
const mimeType = {
	'.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
}

exports.file = function(req, res) {
	fs.exists(req.url, function(exist) {

		if (!exist) res.status(404);
		fs.readFile('./'+req.url, function(err, data) {
			if (err) {
				console.log(err);
				res.status(500);
			}
			let ext = path.parse(req.url).ext;
			res.setHeader('Content-type', mimeType[ext]);
			res.status(200).send(data);
		})
	})
}