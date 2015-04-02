var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	stylus = require('stylus');

module.exports = function(app, config) {
	function compile(str, path) {
		return stylus(str).set('filename', path);
	}

	//Config
	app.set('views', config.rootPath + '/server/views');
	app.set('view engine', 'jade');
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(stylus.middleware(
		{
			src: config.rootPath + '/public',
			compile: compile
		}
	));

	//static rout handeling
	app.use(express.static(config.rootPath + '/public'));
}