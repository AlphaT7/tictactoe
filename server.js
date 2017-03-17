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
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

io.on('test', function() {
  console.log('test successfull');
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

server.listen(PORT);
