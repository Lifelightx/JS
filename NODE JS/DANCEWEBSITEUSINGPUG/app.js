const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 80;

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/admissions');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
});

app.get('/events',(req,res)=>{
    res.status(200).render('events.pug');
})
app.get('/admission',(req,res)=>{
    res.status(200).render('admission.pug');
});

app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
});

app.post('/contact',(req,res)=>{
    console.log(req.body);
    res.status(200).render('contact.pug');
})

const studentShema = new mongoose.Schema({
    name:String,
    age:Number,
    FatherName:String,
    MothersName:String,
    gender:String,
    AdharNo:Number,
    address:String,
    phoneNo:Number,
    ParentsPhoneNo:Number
  });

  const student = mongoose.model('Student', studentShema);

  app.post('/admission', async (req, res) => {
    try {
      console.log(req.body);
  
      const newStudent = new student({
        name: req.body.name,
        age: req.body.age,
        FatherName: req.body.FatherName,
        MothersName: req.body.MothersName,
        gender: req.body.gender,
        AdharNo: req.body.AdharNo,
        address: req.body.address,
        phoneNo: req.body.phoneNo,
        ParentsPhoneNo: req.body.ParentsPhoneNo
      });
  
      const savedStudent = await newStudent.save();
      console.log('Student data saved:', savedStudent);
      res.status(200).send('Student data saved successfully.');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error saving student data.');
    }
});



app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})