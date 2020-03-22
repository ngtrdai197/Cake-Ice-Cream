import { Schema, model } from 'mongoose'

const productSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
      trim: true,
    },
    url: {
      required: true,
      type: String,
      trim: true,
    },
    price: {
      required: true,
      type: Number,
    },
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

export const productModel = model('Product', productSchema, 'Product')
