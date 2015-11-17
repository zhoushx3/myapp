var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
        console.log('???');
});

var app = express();


app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public'));


app.get('/', function(req, res) {
	res.render('index', {title: 'hehe', message: 'hello gay'});
});

app.get('/user', function(req, res) {
	res.send('see you again');
});

app.use(function(req, res, next) {
	res.status(404).send('sorry are you kidding');
});

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('something wrong');
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('....%s:%s', host, port);

});
