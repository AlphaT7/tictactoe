var express = require('express/lib/express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/first_template', function(req, res){
    res.render('first_view');
});

app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
        name: "TutorialsPoint", 
        url:"http://www.tutorialspoint.com"
    });
});

app.get('/components', function(req, res){
    res.render('content');
});

//app.listen(process.env.PORT, process.env.IP);
app.listen(process.env.PORT);