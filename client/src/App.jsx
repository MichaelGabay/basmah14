import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import AppRoutes from "./routes/AppRoutes"
import axios from "axios"
axios.defaults.withCredentials = true

function App() {
  return <AppRoutes />
}

export default App
