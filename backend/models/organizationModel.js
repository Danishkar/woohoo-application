const mongoose = require("mongoose");
const organizationSchema = new mongoose.Schema({
    organizationName:{
        type:String,
        required:true,
    },
    noOfSlotsDogs:{
        type:Number,
        required:true,
    },
    noOfSlotsCats:{
        type:Number,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Organization",organizationSchema);