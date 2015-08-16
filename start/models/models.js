var mongooose = require('mongooose');

var userSchema = new mongooose.Schema ({
	username: String,
	password: String, //hash from pass
	created_at: {type: Date, default: Date.now}
});

var postSchema = new mongooose.Schema({
	text: String,
	created_by: String,
	created_at: {type: Date, default: Date.now}
});

//declare a model called User which has schema userScehma
mongooose.model("User", userSchema);
mongooose.model("Post", postSchema);