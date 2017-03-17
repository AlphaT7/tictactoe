var express = require('express/lib/express');
var app = express();
var INDEX = path.join(__dirname, 'index.html');

app.get('/', function(req, res){
    res.sendFile(INDEX);
});

//app.listen(process.env.PORT, process.env.IP);
app.listen(process.env.PORT);