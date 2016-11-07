var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ResumeSchema = new Schema({
	employer: {
		type: String,
		required: [true, 'Enter an Employer'],
		trim: true
	},

	position: {
		type: String,
		required: [true, 'Enter a Position'],
		trime: true
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

	experiences: Array
});


var Resume = mongoose.model('Resume', ResumeSchema);