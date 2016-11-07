var resumeController = require('../controllers/resumes.js');

module.exports = function(app){

	app.post('/experience', function(req, res){
		resumeController.create(req, res);
	});
	app.get('/resume', function(req, res){
		resumeController.all(req, res);
	});
	app.delete('/resume/:id', function(req, res){
		resumeController.destroy(req, res);
	});

}

