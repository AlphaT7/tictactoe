'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');
var mime = require('mime');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var url = __dirname + '/public/css.css';
var mimeType = mime.lookup(url);

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .use((req, res) => res.setHeader('Content-Type', mimeType))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);