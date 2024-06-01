
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function(){
    console.log("we are connected bro/sis ..")
})

var kittySchema = new mongoose.Schema({
    name: String
});

var kitten = mongoose.model('kitten', kittySchema);

var jeebanKitty = new kitten({name: 'jeebanKitty'});

console.log(jeebanKitty.name);