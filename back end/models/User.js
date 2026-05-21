
const mongoose = require("mongoose")

 
const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        trim:true,
        min:10
    },

    phoneNumber:{
        type:String,
        required:true,
        trim:true,
        min:11,
        max:11
    },

    password:{
        type:String,
        required:true,
    },

    role:{
    type:String,
    required:true,
    enum:["admin","student","teacher","employee","SuperAdmin"],
    default:'student'

    },



},{timestamps:true})


const User = mongoose.model("User",UserSchema)

module.exports = User