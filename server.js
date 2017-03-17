var express = require('express/lib/express');
var app = express();
var PORT = process.env.PORT || 3000;
var path = require('path');
var INDEX = path.join(__dirname + 'public', 'index.html');
var socketIO = require('socket.io');
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(INDEX);
});

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

app.listen(process.env.PORT);