const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('index.html');
const contact = fs.readFileSync('./contact.html');
const about = fs.readFileSync('./about.html')
localhost = '127.0.0.1';
port = 3000;

const server = http.createServer((req, res)=>{
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    if(url == '/'){
        res.end(fileContent);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else{
        res.end('404 Page not found');
    }
});

server.listen(port,localhost,()=>{
    console.log(`server running at http://${localhost}:${port}/`);
})