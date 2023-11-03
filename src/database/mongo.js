const mongoose = require('mongoose');
require("dotenv").config();
const URI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1'

// Mongoose connect function
const connection = () => mongoose.connect(process.env.URIDEV)
                                .then(() => console.log('Connection OK'))
                                .catch((err) => console.log(err.message))


module.exports = connection