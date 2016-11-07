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
	this.all = function(req, res){
		Resume.find().exec(function(err, resume){
			if(err)res.json(err);
			res.json(resume);
		});
	}
	this.destroy = function(req, res){
		Resume.findByIdAndRemove(req.params.id, function(err){
			if(err)res.json(err);
			else{
				res.json(true);
			}
		});
	}
}

module.exports = new resumeController();