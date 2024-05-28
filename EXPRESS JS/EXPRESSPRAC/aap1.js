const express = require('express');
const fs = require('fs');

const home = fs.readFileSync('./index1.html');


const app = express();

const port = 80;

app.get('/',(req, res)=>{
    res.status(200).end(home);
});

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})