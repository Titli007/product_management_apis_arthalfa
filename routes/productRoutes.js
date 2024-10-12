const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validateProduct = require('../middleware/validateProduct');

router.post('/', validateProduct, productController.createProduct);  // Validation middleware added here
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', validateProduct, productController.updateProduct); // Validation middleware added here
router.delete('/:id', productController.deleteProduct);

module.exports = router;
