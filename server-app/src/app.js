import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { auth, user, product, category } from './routes'
import { connection } from './common/database'

export const app = express()

app.use(helmet()) // secure your Express app by setting various Http headers
app.use(cors())
app.options('*', cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
connection()

app.get('', (req, res, next) => {
  return res.send({ mgs: 'Ok' })
})

app.use('/v1/api/auth', auth)
app.use('/v1/api/user', user)
app.use('/v1/api/product', product)
app.use('/v1/api/category', category)
