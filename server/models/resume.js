var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ResumeSchema = new Schema({
	employer: {
		type: String,
		required: [true, 'Enter an Employer'],
		trim: true
	},

	start: {
		type: String,
		required: [true, 'Enter a Start Date'],
		trim: true
	},

	end:{
		type: String,
		default: "Present"
	},

	user:{
		type: Schema.Types.ObjectId,
		ref: 'User'
	},

	experience: Array
});


var Resume = mongoose.model('Resume', ResumeSchema);