const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const reactUser = require('./models/user')
const app = express()
port = 4000;
mongoose.connect('mongodb+srv://jeebanjyotimallik:Jeebanjyoti%40123@reactfullstackpractice1.rn9lr.mongodb.net/user').then( () => console.log('connection established'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors());
app.get('/jokes', function(req, res){
    res.send(
        [
            {
              "type": "general",
              "setup": "What kind of award did the dentist receive?",
              "punchline": "A little plaque.",
              "id": 250
            },
            {
              "type": "programming",
              "setup": "Why did the developer quit his job?",
              "punchline": "Because he didn't get arrays.",
              "id": 408
            },
            {
              "type": "general",
              "setup": "What do you call a pile of cats?",
              "punchline": "A Meowtain.",
              "id": 214
            },
            {
              "type": "general",
              "setup": "Do you know where you can get chicken broth in bulk?",
              "punchline": "The stock market.",
              "id": 106
            },
            {
              "type": "general",
              "setup": "Two guys walk into a bar . . .",
              "punchline": "The first guy says \"Ouch!\" and the second says \"Yeah, I didn't see it either.\"",
              "id": 365
            },
            {
              "type": "general",
              "setup": "What kind of shoes does a thief wear?",
              "punchline": "Sneakers",
              "id": 9
            },
            {
              "type": "general",
              "setup": "What do you call someone with no nose?",
              "punchline": "Nobody knows.",
              "id": 224
            },
            {
              "type": "general",
              "setup": "Why did the man put his money in the freezer?",
              "punchline": "He wanted cold hard cash!",
              "id": 328
            },
            {
              "type": "general",
              "setup": "What do you call an old snowman?",
              "punchline": "Water.",
              "id": 221
            },
            {
              "type": "general",
              "setup": "What do you call corn that joins the army?",
              "punchline": "Kernel.",
              "id": 223
            }]
    )
})


app.post('/', async(req, res)=>{
   await reactUser.create({
    name: req.body.name,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    password : req.body.password
  })
  res.json({status : true})
})

app.post('/login', async(req, res)=>{
  const email = req.body.email
  const password = req.body.password
  const user = await reactUser.findOne({email})
  if(!user){
    return res.json({message : 'user not found'})
  }
  else if(password == user.password && email == user.email){
    return res.json({status: true})
    
  }

})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})