import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {

    //console.log(req)
    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head>This is home page</head>');
        res.end();
    } else if (url === '/message' ) {
        res.write('<html>');
        res.write('<head>Enter Message</head>');
        res.end();
    }
})

server.listen(3001);
