const mongoose = require("mongoose");

const plusSchema = new mongoose.Schema({
    CollegeName:{
        type:String,
        required:true
    },
    Location:{
        type:String,
    },
    detail:{
        type:String,

    },
    image:{
        type:String
    },
});
module.exports = mongoose.model('Plus',plusSchema);