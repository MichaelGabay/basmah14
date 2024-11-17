import mongoose from "mongoose"
const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/b14")
    console.log("db is connected")
  } catch (error) {
    console.log(error)
  }
}

connectToDb()
