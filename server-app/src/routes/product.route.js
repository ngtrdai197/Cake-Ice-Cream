import express from 'express'
import { productController } from '../controllers'
export const product = express.Router()

product.post('/:id', productController.create)
product.put('/', productController.update)
product.delete('/', productController.delete)
