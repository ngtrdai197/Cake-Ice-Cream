import { Schema, model } from 'mongoose'

const categorySchema = new Schema(
  {
    name: {
      required: true,
      type: String,
      trim: true,
    },
    productIds: {
      type: [{ type: String, ref: 'Product' }],
      default: [],
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

categorySchema.virtual('products', {
  ref: 'Product',
  localField: 'productIds',
  foreignField: '_id',
  justOne: false,
})

export const categoryModel = model('Category', categorySchema, 'Category')
