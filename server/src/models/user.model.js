import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    otp: String,
  },
  { timestamps: true }
)
export const User = mongoose.model("users", userSchema)
