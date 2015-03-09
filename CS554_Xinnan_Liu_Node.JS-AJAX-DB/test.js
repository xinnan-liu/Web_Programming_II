
var http = require("http");

var mysql=require('mysql');
var fs = require('fs');
var link=mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:''
});

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       

http.createServer(function (request, response) {

	link.connect();
	link.query('use webtest');
	link.query('select * from web', function(err, res, fields){  
		if(err)
		{
			response.writeHead(404, {'Content-Type': 'text/plain'});
 			response.write(err);
            response.end();
		}
		else
		{
			//response.writeHead(200, {"Content-Length": results.length});
            response.writeHead(200, {"Content-Type": "application/json"});
            //response.end();
			console.log(res)
		}

		response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        //response.end();  
    	 
	});
	link.end();
	
}).listen(8000);

});
console.log('Server running at http://127.0.0.1:8000/');








