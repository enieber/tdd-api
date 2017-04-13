import express from 'express'
import productsRoute from './products/route'

const router = express.Router()

router.use('/products', productsRoute)
router.get('/', (req, res) => res.send('Hello world!'))

export default router
