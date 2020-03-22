import express from 'express'
import { categoryController } from '../controllers'
export const category = express.Router()

category.post('/', categoryController.create)
category.put('/', categoryController.update)
category.delete('/', categoryController.delete)
category.get('/', categoryController.findAll)
