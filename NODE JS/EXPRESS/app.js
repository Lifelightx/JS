
//PUG TAMPLATE

const express = require('express');

const app = express();
const port = 80;

const path = require('path');

//EXPRESS SPECIFIC STUFF
//for serving static files
app.use('/static',express.static('static'))

//PUG SPECIFIC STUFF
//set the tamplate engine as pug
app.set('view engine','pug');
//set teh views directory
app.set('views',path.join(__dirname,'views'));


//ENDPOINTS
app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
})

//START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port} `)
});