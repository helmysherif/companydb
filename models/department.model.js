const mongoose = require('mongoose');
let departmentSchema = mongoose.Schema({
    name:String,
    sectionID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'section'
    }
})
module.exports = mongoose.model('department' , departmentSchema);