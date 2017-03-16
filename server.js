'use strict';

const express = require('express');
const socketIO = require('socket.io');
var path = require('path');
const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

const server = express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  .use((req, res) => res.sendFile(INDEX) )
  

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);