var resumeController = require('../controllers/resumes.js');

module.exports = function(app){

	app.post('/experience', function(req, res){
		resumeController.create(req, res);
	});

}

