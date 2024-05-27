const express = require('express');
const fs = require('fs');
const app = express();
const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const service = fs.readFileSync('./service.html');

app.get('/',(req,res)=>{
    res.setHeader('content-type','html/text');
    res.status(200).send(home);
})

app.get('/about',(req, res)=>{
    res.setHeader('content-type','html/text');
    res.status(200).send(about);
});

app.get('/service',(req,res)=>{
    res.setHeader('content-type','html/text');
    res.status(200).send(service);
})
const localhost = '127.0.0.1';
const port = 80;

app.listen(port,localhost,()=>{
    console.log(`server running at port ${port}`);
})