import Product from '../models/productModel.js';
import User from '../models/userModel.js';

export async function getProducts(req, res) {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (e) {
    res.status(400).send({ message: 'Error' });
  }
}

export async function getOneProduct(req, res) {
  const pid = req.params.id;
  if (!pid) return res.status(400).send({ message: 'Invalid product id.' });

  try {
    const product = await Product.findById(pid);
    res.send(product);
  } catch (e) {
    res.status(400).send({ message: 'Error' });
  }
}

export async function getOneBySlug(req, res) {
  const slug = req.params.slug;
  if (!slug) return res.status(400).send({ message: 'Invalid product slug.' });

  try {
    const product = await Product.findOne({ slug });
    res.send(product);
  } catch (e) {
    res.status(400).send({ message: 'Error' });
  }
}

export async function deleteProducts(req, res) {
  try {
    const products = await Product.deleteMany({});
    res.send({ message: 'OK' });
  } catch (e) {
    res.status(400).send({ message: 'Error' });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send({ message: 'Error' });
  }
}
