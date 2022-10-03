import express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
//import User from '../models/userModel.js';

const seedRouter = express.Router();
seedRouter.get('/', async (req, res) => {
  await Product.deleteMany();
  await User.deleteMany();
  try {
    const createdProducts = await Product.insertMany(data.products);
    const createdUsers = await User.insertMany(data.users);
    return res.send({ createdProducts, createdUsers });
  } catch (e) {
    return res.status(500).send('Server Error');
  }
});

// seedRouter.get('/', async (req, res) => {
//   await User.deleteMany();
//   try {
//     const createdUsers = await User.insertMany(data.users);
//     return res.send({ createdUsers });
//   } catch (e) {
//     return res.status(500).send('Server Error');
//   }
// });
export default seedRouter;
