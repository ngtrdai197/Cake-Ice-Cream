import express from 'express'
import { authController } from '../controllers/auth.controller'
export const user = express.Router()

user.get('/', authController.findAll) // TODO: test
