import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send([{
  name: 'Default Name',
  description: 'new product',
  price: 100
}]));

export default router;
