import express from "express"
import userRouter from "./user.routes.js"

const router = express.Router()

router.use("/user", userRouter)

// errror handler
router.use((err, req, res, next) => {
  err.print()
  res.status(err.status).json(err)
})

export default router
