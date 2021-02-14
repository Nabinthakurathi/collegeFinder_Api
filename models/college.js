const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    CollegeName:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    detail:{
        type:String,

    },
    image:{
        type:String
    },
});
module.exports = mongoose.model('College',itemSchema);