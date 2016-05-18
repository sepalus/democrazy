const express = require('express'),
  app = express(),
  path = require('path');
  port = process.env.port || 3000,
  http = require("http"),
  webpackconfig = require("./webpack.config"),
  //socketServer = require("./server/socket"),
  webpack = require("webpack"),
//  webpackMiddleware = require("webpack-middleware"),
//  webpackHotMiddleware = require('webpack-hot-middleware'),
  history = require('connect-history-api-fallback'),
  compiler = webpack(webpackconfig);

//app.use(history({
//    index: '/public/index.html'
//  rewrites: [
//    { from: /\/\//, to: 'public/index.html'}
//  ]
//}));

//app.use(webpackHotMiddleware(compiler,{
//  log: console.log
//}));

//app.use(webpackMiddleware(compiler ,{
//  stats: {
//    colors: true
//  },
//  watchOptions: {
//    aggregateTimeout: 300,
//    poll: true
//  },
//  hot: true
//}));


//app.get('/', function(req, res){
//  res.sendFile(__dirname + '/public/index.html');
//});

var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('Server listening at http://%s:%s', host, port);
});

const io = require('socket.io').listen(server);

var data = require('./server/data');

io.on('connection', function(socket){

  socket.emit('INIT_STATE_SUCCESS', data);
  socket.on('ADD_VOTE', function(msg){
    console.log('ADD_VOTE received: ' + msg);
    // TODO when vote is added, then notify client
    socket.emit('VOTE_ADDED', {example: 123});
  });
  console.log('A user connected');
});

app.io = io;

var routes = require('./server/routes/index');
app.use('/', routes);

app.use(express.static('public'));
