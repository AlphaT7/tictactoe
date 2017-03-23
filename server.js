// https://gist.github.com/crtr0/2896891 --> Socket.IO Rooms Example

var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var users = [];
var games = [];

app.use(express.static('public'));

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + 'public' + '/index.html');
});

app.get('/userid', function(req, res, next) {

  var name = req.query.name;

  if (users.indexOf(name) != '-1') {
    res.send('User Exists');
  } else {
    users.push(name);
    res.send(name);
  }

});

app.get('/gamename', function(req, res, next) {

  var gameroom = req.query.name;

  if (games.indexOf(gameroom) != '-1') {
    res.send('Game Exists');
  } else {
    games.push(gameroom);
    res.send(gameroom);
  }

});



io.on('connection', (socket) => {
  console.log('client connected');
  
  var rooms = io.sockets.adapter.rooms;
  
  /*
    var numClients = {};

    socket.on('join', function(room) {
      socket.join(room);
      socket.room = room;
      if (numClients[room] == undefined) {
        numClients[room] = 1;
      } else {
        numClients[room]++;
      }
      socket.emit('test',numClients[socket.room].length)
    });
  */

  socket.on('cellclick', function(data) {
    io.emit('clickresponse', data);
    console.log(data);
  });

  socket.on('clickresponse', function(data) {
    console.log(data);
  });

  socket.on('room', function(room) {
    socket.join(room);
  });

  socket.on('joinroom', function(room) {
    socket.join(room, function() {
      console.log(socket.rooms); // [ <socket.id>, 'room 237' ]
    });
  });

  socket.on('test', function() {
    io.emit('test_response', 'Test was successfull!')
/*
    console.log(socket.room);
    console.log(rooms)
*/
    console.log((Object.keys(rooms).length));
  })


  /*
    socket.on('uid', function(data){
      if(users.indexOf(data) != '-1'){
        io.emit('uid_check', {response: 'User Exists'});
      } else {
        users.push(data);
        io.emit('uid_check', {response: 'User Created', uid: data});
      }
    });
  */



  socket.on('error', function(err) {
    console.log(err);
  });

  socket.on('disconnect', function() {
    console.log('client disconnected')
  });


});

setInterval(() => io.emit('time', new Date().toTimeString().slice(0, -11)), 1000);

server.listen(PORT);
