const express = require('express')
const cors =  require('cors')
const app = express()
require('dotenv').config()
const connection = require('./src/database/mongo')
const PORT = 5500

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// Static Files
app.use('/', express.static(__dirname + '/public'))

// View Engine
app.set('view engine','pug');
app.set('views', './src/views')

// Routes 
app.use(require('./src/routes/index.routes'))
app.use('/api', require('./src/routes/product.routes'))

app.listen(PORT, () => {
    connection()
    console.log(`Server is running on port ${PORT}`)
})