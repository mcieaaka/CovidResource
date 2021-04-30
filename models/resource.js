const mongoose = require('mongoose');

var ResourceSchema = new mongoose.Schema({
    name:String,
    contact:String,
    created:{type:Date,default:Date.now},
    pin:String,
    city:String,
    state:String,
    type:String
})

module.exports = mongoose.model('Resource',ResourceSchema);