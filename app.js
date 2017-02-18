var express = require('express/lib/express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');


  app.get('/health', function(req, res){
    res.writeHead(200);
    res.end();
  });

  app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
        name: "TutorialsPoint", 
        url:"http://www.tutorialspoint.com"
    });
  });

  
server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
