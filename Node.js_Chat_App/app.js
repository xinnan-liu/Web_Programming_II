var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(52123);

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});


var conns = {};
io.sockets.on('connection', function(socket) {
	var cid = socket.id;

	socket.emit('join', {
		cid: socket.id
	});





	socket.on('message', function(name, words) {
		var cid = socket.id;
		socket.emit('broadcast', name, words);
		socket.broadcast.emit('broadcast', name, words);

	});
});

//app.use('/public', express.static(__dirname + '/public'));  

console.log('daemon start on http://localhost:52123');