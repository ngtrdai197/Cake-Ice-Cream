import { Schema, model } from 'mongoose'
import { compareSync, hashSync, genSaltSync } from 'bcryptjs'

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      required: true,
      type: String,
    },
    roles: {
      type: [String],
      default: 'user',
    },
    postIds: [String],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id, delete ret.__v
      },
    },
  },
)

userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) {
    return next()
  }
  try {
    const salt = await genSaltSync(10)
    this.password = await hashSync(this.password, salt)
    await next()
  } catch (error) {
    await next(error)
  }
})

userSchema.statics.validPassword = async function(password, hashPassword) {
  return await compareSync(password, hashPassword)
}

export const userModel = model('User', userSchema, 'User')
