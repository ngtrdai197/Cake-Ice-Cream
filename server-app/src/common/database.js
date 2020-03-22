import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.dev' })

export const connection = async () => {
  const url = `mongodb://localhost:27017/${process.env.DATABASE}`
  try {
    const result = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    if (result) {
      console.log('Database is connected ...')
    }
  } catch (error) {
    throw error
  }
}
