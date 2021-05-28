const mongoose = require('mongoose');
let sectionsSchema = mongoose.Schema({
    name:String
})
module.exports = mongoose.model('section' , sectionsSchema);