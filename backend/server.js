import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import {
  getProducts,
  deleteProducts,
  getOneProduct,
  getOneBySlug,
  getUsers,
} from './controllers/ProductController.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);

// test
app.get('/api/products', getProducts);
app.get('/api/users', getUsers);
app.delete('/api/products', deleteProducts);

app.get('/api/products/slug/:slug', getOneBySlug);
app.get('/api/products/:id', getOneProduct);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
