import { Request } from "express"

declare global {
  namespace Express {
    interface Request {
      _id?: string // Add your specific type here, e.g., `string` or `number`
    }
  }
}
