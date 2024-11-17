import express from "express"
import { port } from "./secrets/env.js"
import cors from "cors"
import appRouter from "./routes/app.routes.js"
import "./db/mongoConnect.js"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json())
app.use(cookieParser())
app.use((req, _, next) => {
  console.log(req.method, req.originalUrl)
  next()
})

app.use(appRouter)
app.listen(port, () => {
  console.log("server is running on port " + port)
})
