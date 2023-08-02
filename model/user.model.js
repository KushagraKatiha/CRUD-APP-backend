const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    name : {
            type: String,
            require: [true, 'Name is required'],
            trim: true,
            maxLength: [50, 'Name must be less than 50 chars']
        },

    email: {
            type: String, 
            require: [true, 'Email is required'],
            unique: true
    }
}) 

module.exports = mongoose.model("User", userModel)