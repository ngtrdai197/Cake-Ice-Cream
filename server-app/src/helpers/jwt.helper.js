import jwt from 'jsonwebtoken'

export async function createToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: '1h',
  })
}
