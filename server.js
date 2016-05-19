var express = require('express');
var path = require('path');
var app = express();
var static_path = path.join(__dirname, 'public');
var Guid = require('guid');

app.use(express.static(static_path))
	.get('/', function (req, res) {
		res.sendFile('index.html', {
			root: static_path
		});
	}).listen(process.env.PORT || 3000, function (err) {
		if (err) { console.log(err) };
		console.log('Listening at localhost:3000');
	});

// Babel ES6/JSX Compiler
//require('babel-register');

//var swig  = require('swig');
/**var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');

var routes = require('./routes/index');

app.use('/', routes);

app.set('port', process.env.PORT || 3000);

//if(process.argv[2] == 'dev') {
app.use(express.static(path.join(__dirname)));
//}
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

var server = app.listen(app.get('port'), function() {
	console.log("app started");

});**/
