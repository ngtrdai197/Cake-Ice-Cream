import { categoryModel } from '../models/category.model'
import { productModel } from '../models/product.model'

export const categoryController = {
  async create(req, res) {
    const { name } = req.body
    try {
      const category = await categoryModel.findOne({ name })
      if (category)
        return res
          .status(404)
          .json({ statusCode: 400, msg: 'Category already exist ...' })
      const newCategory = await categoryModel.create({ name })
      return res.status(200).json(newCategory)
    } catch (error) {
      console.error(`error: `, error)
      return res.status(500).json({ statusCode: 500, msg: error })
    }
  },
  async update(req, res) {
    const { id } = req.body
    const updated = await categoryModel.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(updated)
  },
  async delete(req, res) {
    const { id } = req.params
    const deleted = await categoryModel.findByIdAndRemove(id)
    return res
      .status(200)
      .json({ statusCode: 200, msg: deleted ? true : fasle })
  },
  async findAll(req, res) {
    const { populate } = req.query
    let populates
    if (populate) {
      populates = populate.split(',')
    }
    try {
      const categories = await categoryModel.find().populate(populates)
      return res.status(200).json(categories)
    } catch (error) {
      console.error(`error: `, error)
      return res.status(500).json({ statusCode: 500, msg: error })
    }
  },
}
