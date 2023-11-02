const indexRouter = require('express').Router()
const {index} = require('../controllers/index.controller')


indexRouter.get('/', index)

module.exports = indexRouter