// import express from "express"
// import appRouter from "./routes/product.routes"
// const app = express()

// app.use(express.json())

// app.use(appRouter)

// app.listen("3000", () => {
//   console.log("server is listening on port http://localhost:3000")
// })

type times = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type format = "am" | "pm"
type validTime = `${times}${format}`

type allTimes = Uppercase<validTime> | Lowercase<validTime>

type point = readonly [number, number]

let p: point = [34, 45]
