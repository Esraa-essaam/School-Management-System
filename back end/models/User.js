const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 10 
    },

    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        minLength: 11, 
        maxLength: 11  
    },

    password: { 
        type: String,
        required: true,
    }, 

    role: {
        type: String,
        required: true,
        enum: ["admin", "student", "teacher", "employee"],
        default: 'student'
    },

}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;