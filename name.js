const http = require('http');
http.createServer((request, response) => { // 
    console.log("HTTP works!");
    response.writeHead(404, {
        'Content-Type': 'text/html'
    });
    response.write('<h1>Page Not Found 404</h1>');
    response.end();
}).listen(8080);