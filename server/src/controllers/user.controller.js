import { User } from "../models/user.model.js"
import { secretKey } from "../secrets/env.js"
import AppError from "../utils/appError.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userCtrl = {
  async signup(req, res, next) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = await User.create({ ...req.body, password: hashedPassword })

      const getUser = await User.findOne({ _id: "..." })

      res.status(201).json({ ...user._doc, password: "*****" })
    } catch (error) {
      next(new AppError("user alrady exists", 400, error))
    }
  },
  async login(req, res, next) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email })
      if (!user) {
        return next(new AppError("user or password wrong", 401))
      }
      if (!(await bcrypt.compare(password, user.password))) {
        return next(new AppError("user or password wrong", 401))
      }

      const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: "30d" })
      res.cookie("access_token", "Bearer " + token, {
        httpOnly: true,
        secure: true,
      })
      res.status(201).json({ ...user._doc, password: "****" })
    } catch (error) {
      next(new AppError(null, 401, error))
    }
  },
  async getInfo(req, res, next) {
    try {
      const user = await User.findById(req._id)
      res.status(200).json({ ...user._doc, password: "*******" })
    } catch (error) {
      next(new AppError(null, null, error))
    }
  },
}

export default userCtrl
