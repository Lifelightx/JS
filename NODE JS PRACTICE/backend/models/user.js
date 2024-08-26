const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:String,
    email: String,
    phoneNo: Number,
    password : String
})

const reactUser = mongoose.model('reactUser', userSchema)

module.exports = reactUser