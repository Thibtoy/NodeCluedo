const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;

const app = express();
const urlencoded = bodyParser.urlencoded({extended:true});

app.use(urlencoded);
app.use(bodyParser.json());

const {gameSchema} = require('./gameSchema');
app.Store = new Object();

gameSchema().catch(err => console.log(err))
		.then(game => {
			app.Store = {
				gameModel: game,
				inGame: new Object(),
			}
			const gameRoute = require('./routes/game');
	  		gameRoute(app);

			const callFiles = require('./routes/callFiles');
	  		callFiles(app);

	  		setInterval(() => {
	  			for (let type in app.Store.inGame) {
	  				let game = app.Store.inGame[type];
	  				if (game.end || (game.date + 3600000) < Date.now()){
	  					delete app.Store.inGame[type];
	  				} 
	  			}
	  		}, 600000);

			app.listen(PORT, () => console.log('listening on: '+PORT));
		});