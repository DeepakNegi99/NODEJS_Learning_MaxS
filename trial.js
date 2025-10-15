import http from 'http';
import fs from 'fs';

const server =http.createServer((req, res) => {

    console.log(req)

    res.setHeader("200", {'Content-Type': 'Json'});
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3001);