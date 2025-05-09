const http = require('http');



http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!DOCTYPE html><html lang="en"><head></head><body></body></html>');
    res.write('<h1>Svobodson</h1>');
    res.end('Hello World!');
}).listen(5000);
