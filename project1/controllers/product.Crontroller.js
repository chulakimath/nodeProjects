const Product = require("../models/product.model.js")


exports.hello = (request, respone) => {
    respone.send("hello from server");
}

exports.saveProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updateProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true }).lean()
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "item not found" })
        }
        res.status(200).json({ message: "success", data: deleted })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}