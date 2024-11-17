import express from "express"
import AppError from "../utils/appError.js"
import userCtrl from "../controllers/user.controller.js"
import { auth } from "../middlewares/auth.js"
const router = express.Router()

router.post("/signup", userCtrl.signup)
router.post("/login", userCtrl.login)
router.get("/info", auth, userCtrl.getInfo)

export default router
