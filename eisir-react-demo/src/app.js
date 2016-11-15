'use strict';

var http = require("http"),
url = require("url"),
path = require("path"),
fs = require("fs"),
util = require('util');
var port=3010;
let open = require('open')

http.createServer(function (req, res) {
var pathname=path.resolve(__dirname,"../dist"+url.parse(req.url).pathname);
//console.log(pathname);
if (path.extname(pathname)=="") {
pathname+="/";
}
if (pathname.charAt(pathname.length-1)=="/"){
pathname+="index.html";
}

fs.exists(pathname,function(exists){
	if(exists){
	switch(path.extname(pathname)){
	case ".html":
	res.writeHead(200, {"Content-Type": "text/html"});
	break;
	case ".js":
	res.writeHead(200, {"Content-Type": "text/javascript"});
	break;
	case ".css":
	res.writeHead(200, {"Content-Type": "text/css"});
	break;
	case ".gif":
	res.writeHead(200, {"Content-Type": "image/gif"});
	break;
	case ".jpg":
	res.writeHead(200, {"Content-Type": "image/jpeg"});
	break;
	case ".png":
	res.writeHead(200, {"Content-Type": "image/png"});
	break;
	default:
	res.writeHead(200, {"Content-Type": "application/octet-stream"});
	}	
	fs.readFile(pathname,function (err,data){
	res.end(data);
	});
	} else {
	res.writeHead(404, {"Content-Type": "text/html"});
	res.end("404 Not Found");
	}
});

}).listen(port, "127.0.0.1",()=>{
	let url = util.format('http://%s:%d', 'localhost', port)

    console.log('Listening at %s', url)

    open(url)
});

console.log("Server running at http://localhost:"+port);