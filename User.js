//FILENAME : User.js

const mongoose = require("mongoose");

const UserScema = mongoose.Schema({
    usernbame: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
    });
module.exports = mongoose.model("user", UserScema);