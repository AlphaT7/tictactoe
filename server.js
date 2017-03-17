var express = require('express');  
const PORT = process.env.PORT || 3000;
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(express.static('public'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + 'public' + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

server.listen(PORT);

/*
const express = require('express/lib/express');
const socketIO = require('socket.io/lib/socket.io');
const path = require('path');
const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname + 'public', 'index.html');
server.use(express.static('public'))

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
*/