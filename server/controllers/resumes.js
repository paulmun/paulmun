var mongoose = require('mongoose'),
	Resume = mongoose.model('Resume');

function resumeController(){
	this.create = function(req, res){
		var resume = new Resume(req.body);
		resume.save(function(err, resume){
			if(err)res.json(err);
			else{
				res.json(resume);
			}
		})
		console.log(req.body);
		console.log(resume);
	}
}

module.exports = new resumeController();