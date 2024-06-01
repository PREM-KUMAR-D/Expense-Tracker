const http = require('http');

const server = http.createServer((req,res)=>{
    const url =req.url;
    res.setHeader('Content-Type','text/html');
    if(url === '/' || url === '/home'){
        res.write('<html>');
        res.write('<head><title>Server</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('<html>');
        return res.end();
    }else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>Server</title></head>');
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('<html>');
        return res.end();
    }else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>Server</title></head>');
        res.write('<body><h1>Welcome to my nodeJS Project </h1></body>');
        res.write('<html>');
        return res.end();
    }
})

server.listen(4000);