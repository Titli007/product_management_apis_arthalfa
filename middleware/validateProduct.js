const validateProduct = (req, res, next) => {
    const { name, price, description, category } = req.body;
  
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Product name is required and must be a string' });
    }
    if (typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ error: 'Product price is required and must be a positive number' });
    }
    if (description && typeof description !== 'string') {
      return res.status(400).json({ error: 'Product description must be a string' });
    }
    if (!category || typeof category !== 'string') {
      return res.status(400).json({ error: 'Product category is required and must be a string' });
    }
  
    next();
  };
  
  module.exports = validateProduct;
  