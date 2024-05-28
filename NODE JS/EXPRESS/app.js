
//PUG TAMPLATE

const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;

const path = require('path');

//EXPRESS SPECIFIC STUFF
//for serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
//set the tamplate engine as pug
app.set('view engine','pug');
//set teh views directory
app.set('views',path.join(__dirname,'views'));


//ENDPOINTS
app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});
app.get('/home',(req, res)=>{
    const para = {'title': 'Setting variables in pub',
                 'content':'This is not complecate but i have to understand'};
    res.status(200).render('home.pug',para);

    
});

app.get('/about',(req, res)=>{
    const about = {'title':'About Page',
                  'content':'This is about page from pug this is so fun',
                  'about' : 'This is About page from my side thsi sis soa sfjsfo jlk;sjogo goodd paod onot onoot hsdfo dnojf ohgjosf'
    };
    res.status(200).render('about.pug',about);
})
app.post('/',(req, res)=>{
    nam = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outPutToWrite = `name = ${nam} age= ${age} gender = ${gender} address = ${address} more = ${more} `;
    fs.writeFileSync('output.txt',outPutToWrite);
    const para = {'message': 'your application successfully submitted'}
    res.status(200).render('home.pug',para);
})

//START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port} `)
});