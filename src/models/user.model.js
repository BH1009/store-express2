const mongoose = require('mongoose')

const userSchema =  mongoose.Schema({
    name: String,
    password: String,
    typeUser: String
}) 

const User = mongoose.Model('users', userSchema)

module.exports = User