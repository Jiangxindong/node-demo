var http = require('http');
var express = require('express');

// use createServer method to create a server
http.createServer(function (req, resp) {
  resp.writeHead(200, { 'Content-Type': 'text/plain' });
  resp.end('Hello World\n')
}).listen(8888);
console.log('Serve running at http://127.0.0.1:8888/');