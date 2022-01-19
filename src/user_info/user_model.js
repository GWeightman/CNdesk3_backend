const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const user_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
})


user_schema.methods.generate_authtoken = function () {
    return jwt.sign({_id: this._id}, process.env.SECRET)
}

const User = mongoose.model("User", user_schema)

module.exports = User