import { userModel } from '../models/user.model'
import { createToken } from '../helpers/jwt.helper'

export const authController = {
  async login(req, res, next) {
    const { username, password } = req.body
    try {
      const user = await userModel
        .findOne({ username })
        .select('-postIds -roles')
      if (!user) {
        return res.status(400).json({
          message: 'Credentials is not valid. Check again !',
        })
      }
      // const isValid = await userModel.validPassword(password, user.password)
      if (password !== user.password) {
        return res.status(400).json({
          message: 'Credentials is not valid. Check again !',
        })
      }
      const payload = { username: user.username, id: user.id }
      const token = await createToken(payload)
      delete user.password
      return res.status(200).json({ accessToken: token, me: user })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  },

  async register(req, res, next) {
    const { username, password, fullName } = req.body
    if (!username || !password || !fullName) return
    try {
      const user = await userModel.create({ username, password, fullName })
      const payload = { username: user.username, id: user.id }
      const token = await createToken(payload)
      delete user.password
      return res.status(200).json({ access_token: token, me: user })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  },

  async profile(req, res, next) {
    const user = await userModel
      .findOne({ username: 'nguyendai@gmail.com' })
      .select('-postIds -roles')
    return res.status(200).json(user)
  },

  async findAll(req, res, next) {
    const users = await userModel.find().select('-postIds -roles')
    return res.status(200).json(users)
  },
}
