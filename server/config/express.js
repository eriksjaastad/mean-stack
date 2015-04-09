var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
  	stylus = require('stylus'),
  	session = require('express-session'),
  	passport = require('passport');

	module.exports = function(app, config) {
	  	function compile(str, path) {
	    	return stylus(str).set('filename', path);
	 }


    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.set('trust proxy', 1);
    app.use(logger('dev'));
    app.use(bodyParser());
    app.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true }
	}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(stylus.middleware(
      {
        src: config.rootPath + '/public',
        compile: compile
      }
    ));
    app.use(express.static(config.rootPath + '/public'));

}