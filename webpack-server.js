const express = require('express'),
  app = express(),
  path = require('path');
  port = process.env.PORT || 3000,
  http = require("http"),
  webpackconfig = require("./webpack.config"),
  webpack = require("webpack"),
  webpackMiddleware = require("webpack-dev-middleware"),
  compiler = webpack(webpackconfig),
  Guid = require('guid');

const INIT_STATE_REQUEST = require('./app/constants').INIT_STATE_REQUEST,
      INIT_STATE_SUCCESS = require('./app/constants').INIT_STATE_SUCCESS,
      ADD_VOTE = require('./app/constants').ADD_VOTE,
      VOTE_ADDED = require('./app/constants').VOTE_ADDED;

if(!process.env.PROD) {
  app.use(webpackMiddleware(compiler ,{
   stats: {
     colors: true
   },
   watchOptions: {
     aggregateTimeout: 300,
     poll: true
   }
  }));
}

var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('Server listening at http://%s:%s', host, port);
});

const io = require('socket.io').listen(server);
var data = require('./server/data');

io.on('connection', function(socket){

  // on init request, return state and token
  socket.on(INIT_STATE_REQUEST, function(token) {
    var response = {
      _token: '',
      _state: data
    };

    // Check for valid token
    if(token && Guid.isGuid(token)) {
      response._token = token;
    }
    else {
      response._token = Guid.raw();
    }

    socket.emit(INIT_STATE_SUCCESS, response);
  })

  // on add vote request, check if allready voted and valid token
  socket.on(ADD_VOTE, function(vote){
    if(vote.token && Guid.isGuid(vote.token)) {
      // Can only vote once
      if( !data.votes.filter(function(a) { return a.token === vote.token }).length ) {

        var newVote = {candidate: vote.id, token: vote.token};
        data.votes.push(newVote);

        // broadcast to all
        io.sockets.emit(VOTE_ADDED, newVote);
      }
      else {
        //socket.broadcast.emit(VOTE_ADDED, newVote);
      }
    }
  });
});

app.io = io;

var routes = require('./server/routes/index');
app.use('/', routes);

app.use(express.static('public'));
