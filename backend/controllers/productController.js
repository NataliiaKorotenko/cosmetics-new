const Product = require('../models/Product');

// GET /api/products
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// POST /api/products
const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
};

// PUT /api/products/:id
const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
