var mongoose = require('mongoose');

module.exports = function(config) {
	// Connect to Mongodb
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('mean-stack, db opened');
	});

	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		username: String
	});

	var User = mongoose.model('User', userSchema);
	User.find({}).exec(function(err,collection) {
		if(collection.length === 0) {
			User.create({firstName:'Erik',lastName:'Sjaastad',username:'Erik'});
			User.create({firstName:'user1',lastName:'user1lastname',username:'User1'});
			User.create({firstName:'user2',lastName:'user2lastname',username:'User2'});
		}
	});
}