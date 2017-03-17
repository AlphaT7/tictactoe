var express = require('express/lib/express');
var app = express();
var PORT = process.env.PORT || 3000;
var path = require('path');
var INDEX = path.join(__dirname + 'public', 'index.html');
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(INDEX);
});

//app.listen(process.env.PORT, process.env.IP);
app.listen(process.env.PORT);