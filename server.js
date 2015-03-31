var express = require('express'),
	stylus = require('stylus'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

//set Node enviornment
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'; 

var app =  express();

function compile(str, path) {
	return stylus(str).set('filename', path);
}

//Config
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
));

//static rout handeling
app.use(express.static(__dirname + '/public'));

// Connect to Mongodb
if(env === 'development') {
	mongoose.connect('mongodb://localhost/mean-stack');
} else {
	mongoose.connect('mongodb://Erik:MeanStack@ds061218.mongolab.com:61218/mean-stack');	
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
	console.log('mean-stack, db opened');
});


app.get('/partials/*', function(req, res) {
	res.render('../../public/app/' + req.params[0]);
});

app.get('*', function(req, res) {
	res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
