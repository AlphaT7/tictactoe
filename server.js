var express = require('express');
const PORT = process.env.PORT || 3000;
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static('public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + 'public' + '/index.html');
});

io.on('connection', (socket) => {
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

  socket.on('cellclick', (socket) => {
    socket.emit('test', 'test successfull');
  });

  socket.on('disconnect', function() {
    //numClients[socket.room]--;
  });


});

io.on('cellclick', (socket) => {
  io.emit('test', 'test successfull');
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

server.listen(PORT);
