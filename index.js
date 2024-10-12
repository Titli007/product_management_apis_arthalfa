const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database'); 


dotenv.config();


const app = express();


app.use(express.json());


app.use('/products', productRoutes);


sequelize.sync()
  .then(() => {
    console.log('Database synced');
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
