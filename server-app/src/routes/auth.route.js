import express from 'express'
import { authController } from '../controllers'
export const auth = express.Router()

auth.post('/login', authController.login)
auth.post('/register', authController.register)
auth.get('/profile', authController.profile) // TODO: test
