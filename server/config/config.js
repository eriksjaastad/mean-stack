var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/mean-stack',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://Erik:MeanStack@ds061218.mongolab.com:61218/mean-stack',
		port: process.env.PORT || 80
	}
}