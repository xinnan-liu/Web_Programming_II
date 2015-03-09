var app = require('express')(), 
server = require('http').createServer(app);
server.listen(52123);

app.get('/', function (req,res)
{	res.sendfile(__dirname + '/index2.html');
});
 
 var io=require('socket.io').listen(server);
 
 io.sockets.on('connection',function(socket){
     socket.on('Goodbye',function(data){
         console.log('You say goodbye:'+data);
         socket.emit('hello', "And I say hello");
     });
     socket.emit('hooray',"You're good");
 });
