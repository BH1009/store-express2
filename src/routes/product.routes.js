const productRouter = require('express').Router()
const {allProducts, showProduct, addProduct, editProduct, deleteProduct} = require('../controllers/product.controller')

productRouter.get('/product', allProducts)

productRouter.get('/product/:id', showProduct)

productRouter.post('/product', addProduct)

productRouter.patch('/product/id', editProduct)

productRouter.delete('/product/:id', deleteProduct)

module.exports = productRouter