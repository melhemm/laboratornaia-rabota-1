const http = require('http'); 
const fs = require('fs'); 
const header = "header.html";
const body = "body.html";
const footer = "footer.html";

http.createServer((request, response) => { 
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var allData = [header, body, footer].map(filename => {   
        return (fs.readFileSync(filename,'utf8')) 
    });
    response.write(allData.join(""))
    response.end()
}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});

