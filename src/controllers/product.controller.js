const Product = require('../models/product.model')

const addProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.json(newProduct)
}

const showProduct = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id})
    res.json(product)
}

const allProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

const editProduct = async = async (req, res) => {
    const productModified = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    res.json(productModified)
}

const updateCurrency = async (req, res) => {
    
}

const deleteProduct = async (req, res) => {
    const productRemoved = await Product.findByIdAndDelete({_id: req.params.id})
    res.json(productRemoved)
}

module.exports = {
    addProduct,
    showProduct,
    allProducts,
    editProduct,
    deleteProduct
}