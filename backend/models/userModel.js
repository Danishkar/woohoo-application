const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const validator = require("validator")
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("User",userSchema);