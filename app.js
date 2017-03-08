const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      env          = process.env;
      

let server = http.createServer(function (req, res) {
  let url = req.url;
  if (url == '/') {
    url += 'index.html';
  }
io           = require('socket.io')(http);
  // IMPORTANT: Your application HAS to respond to GET /health with status 200
  //            for OpenShift health monitoring
var io = require('socket.io').listen(server);
//Whenever someone connects this gets executed
io.on('connection', function(socket){
  console.log('A user connected');
  //Send a message when 

  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });
  
  socket.on('clientEvent', function(data){
	console.log(data);
  });
  
  socket.on('testevent', function(data){
	console.log(data);
  });
  
});

  if (url == '/health') {
    res.writeHead(200);
    res.end();
  } else if (url == '/info/gen' || url == '/info/poll') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, no-store');
    res.end(JSON.stringify(sysInfo[url.slice(6)]()));
  } else {
    fs.readFile('./static' + url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
      } else {
        let ext = path.extname(url).slice(1);
        if (contentTypes[ext]) {
          res.setHeader('Content-Type', contentTypes[ext]);
        }
        if (ext === 'html') {
          res.setHeader('Cache-Control', 'no-cache, no-store');
        }
        res.end(data);
      }
    });
  }
});



server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
