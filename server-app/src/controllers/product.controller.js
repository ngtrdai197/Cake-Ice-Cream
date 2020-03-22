import { productModel } from '../models/product.model'
import { categoryModel } from '../models/category.model'

export const productController = {
  async create(req, res) {
    const { id } = req.params
    try {
      const category = await categoryModel.findById(id)
      if (!category)
        return res
          .status(404)
          .json({ statusCode: 404, msg: 'Category not found ...' })
      const product = await productModel.create(req.body)
      category.set('productIds', [...category.productIds, product.id])
      category.save()
      return res.status(200).json(product)
    } catch (error) {
      console.error(`error: `, error)
      return res.status(500).json({ statusCode: 500, msg: error })
    }
  },
  async update(req, res) {
    const { id } = req.body
    const updated = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(updated)
  },
  async delete(req, res) {
    const { id } = req.params
    const deleted = await productModel.findByIdAndRemove(id)
    return res
      .status(200)
      .json({ statusCode: 200, msg: deleted ? true : fasle })
  },
}
