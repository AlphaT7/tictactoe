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

var io = socketIO(app);

io.on('connection', function(){ 
  
    

});

app.listen(PORT);