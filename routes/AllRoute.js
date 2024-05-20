import express from 'express';
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from '../controller/productController.js';

const router = express.Router();

//* All relief good routes

// Create a new ReliefGood
router.post('/create-product',createProduct);

// Get all ReliefGoods
router.get('/products', getAllProducts);

// Get a single ReliefGood by ID
router.get('/products/:id', getProductById);

// Update a ReliefGood by ID
router.put('/products/:id', updateProductById);

// Delete a ReliefGood by ID
router.delete('/products/:id', deleteProductById);

export default router;
