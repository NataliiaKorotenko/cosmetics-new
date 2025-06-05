const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// GET /api/products — получить все товары
router.get('/', getProducts);

// POST /api/products — создать новый товар
router.post('/', createProduct);

// PUT /api/products/:id — обновить товар по id
router.put('/:id', updateProduct);

// DELETE /api/products/:id — удалить товар по id
router.delete('/:id', deleteProduct);

module.exports = router;
