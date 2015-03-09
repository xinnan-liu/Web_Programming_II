
var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer(function (request, response) {

	var getData=url.parse(request.url,true).query;
	var name=getData['file'];

	
		fs.readFile(""+name+".txt",'ascii', function(err, data){
 		if(err){
 			response.writeHead(404, {'Content-Type': 'text/html'});
 			response.write("<h1>Not Found!</h1>");
            response.write("This request URL " + name + ".txt was not found on this server.");
            response.end();
 		}else{
 			response.writeHead(200, {
				"content-type": "text/html"
			});
			response.write("<h1>The contents in "+name+".txt are:</h1>" + data);
			response.end();
 		}

		})

}).listen(52123);

console.log('Server running at http://127.0.0.1:52123/');