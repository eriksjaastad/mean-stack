var mongoose = require('mongoose'),
	encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	username: String,
	salt: String,
	hashed_pwd: String,
	roles: [String]
});

userSchema.methods = {
	authenticate: function(passwordToMatch) {
		return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
	}
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
	User.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			var salt, hash;
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'Erik');
			User.create({firstName:'Erik', lastName:'Sjaastad', username:'Erik', salt:salt, hashed_pwd:hash, roles: 'admin'});
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'User1');
			User.create({firstName:'user1', lastName:'user1lname', username:'User1', salt:salt, hashed_pwd:hash});
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'User2');
			User.create({firstName:'user2', lastName:'user2lname', username:'User2', salt:salt, hashed_pwd:hash});
		}
	})
};

exports.createDefaultUsers = createDefaultUsers;