import mongoose from 'mongoose'
export const connection = async () => {
  const url = `mongodb://localhost:27017/book-store`
  // TODO: check env database name
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
