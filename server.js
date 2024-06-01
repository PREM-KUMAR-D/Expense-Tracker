const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/' || url === '/home') {
        let buttonVal = "Send";
        const exist =fs.existsSync('message.txt');
        if(exist){
            const data =fs.readFileSync('message.txt');
            buttonVal = data.toString();
        }   
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body><form action ="/message" method="POST"> <input type="text" name="message"> <button type="submit">${buttonVal}</button></form></body>`);
        res.write('<html>');
        return res.end();

    }
    if (url === '/message' && method === 'POST') {
        const body  =[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);

        });

        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end();
        // console.log('Redirected to message');
    }
})

server.listen(4000);