var express = require('express/lib/express');
var app = express();

app.get('/', function(req, res){
    res.send('root');
});

//app.listen(process.env.PORT, process.env.IP);
app.listen(process.env.PORT);