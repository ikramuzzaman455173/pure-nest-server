import Product from '../model/products.js';

// Create a new Product
export const createProduct = async (req, res) => {
  try {
    const { image, title, category, price, flashSaleOffer, ratings, brand, discount, description } = req.body;
    const newProduct = new Product({ image, title, category, price, flashSaleOffer, ratings, brand, discount, description });

    // Save the new Product to the database
    const savedProduct = await newProduct.save();

    // Respond with the created Product
    res.status(201).json(savedProduct);
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    // Handle other errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all Products
export const getAllProducts = async (req, res) => {
  try {
    // Retrieve all Products from the database
    const products = await Product.find({});
    // Respond with the retrieved Products
    res.status(200).json(products);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single Product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the Product with the specified ID
    const product = await Product.findById(id);
    // Check if the Product exists
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // Respond with the retrieved Product
    res.status(200).json(product);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a Product by ID
export const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, category, price, flashSaleOffer, ratings, brand, discount, description } = req.body;

    // Find and update the Product with the specified ID
    const updatedProduct = await Product.findByIdAndUpdate(id, { image, title, category, price, flashSaleOffer, ratings, brand, discount, description }, { new: true });

    // Check if the Product exists
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // Respond with the updated Product
    res.status(200).json(updatedProduct);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a Product by ID
export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    // Find and delete the Product with the specified ID
    const deletedProduct = await Product.findByIdAndDelete(id);

    // Check if the Product exists
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // Respond with success message
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
