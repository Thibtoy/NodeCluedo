const express = require('express');
const bodyParser = require('body-parser');

var sqlayout = require('../sqlayout');
sqlayout = sqlayout({
	host: process.env.DATABASE_URL || 'localhost',
	user: process.env.DATABASE_USER || 'root',
	password: process.env.DATABASE_PASS || 'root',
	database: process.env.DATABASE_NAME || 'sqlayout',
});

userModel = {
	table: 'users',
	id: {type: 'INT', autoInc: true, primaryKey: true},
	name: {type: 'VARCHAR(55)', restriction: /^[a-zA-Z- ]+$/},
	test: {type: 'VARCHAR(50)', nullable: true},
	password: {type: 'PASSWORD'},
	date: {type: 'TIMESTAMP'},
	email: {type: 'EMAIL'}
};

testModel = {
	table: 'test',
	id: {type: 'INT', autoInc: true, primaryKey: true},
	categorie: {type: 'VARCHAR(55)'},
	user_id: {type: 'INT', foreignKey: {refTable: 'users', refField: 'id'}}
};

sqlayout.initModel(userModel);
sqlayout.initModel(testModel);



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

			app.listen(PORT, () => {
				console.log('listening on: '+PORT);
				// newUser = sqlayout.models.users.requireModel();
				// newUser.name.content = 'test';
				// newUser.password.content = 'LeMotDeP4ssePasSiCompl?qu';
				// newUser.date.content = 20181113220654;
				// newUser.email.content = 'cabanes.thibault@gmail.com';
				newTest = sqlayout.models.test.requireModel();
				newTest.categorie.content = 'another test';
				newTest.user_id.content = 1;
				sqlayout.models.test.recordSafe(newTest, function(err, data) {
					if (err) return console.log(err);
					sqlayout.models.users.findAll()
						.then(data => {
							console.log(data, 'ici');
							data[0].getTest()
								.then (data => console.log(data))
								.catch(err => {throw err});
						})
						.catch(err => {throw err});
				});
				
				
			});
		});