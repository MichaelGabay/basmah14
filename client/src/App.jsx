import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import AppRoutes from "./routes/AppRoutes"
import axios from "axios"
import { UserContext } from "./context/userContext"
import { GET_INFO_URL } from "./constants/endPoint"
axios.defaults.withCredentials = true

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log(user)
  }, [user])

  useEffect(() => {
    checkIfUserConnected()
  }, [])
  const checkIfUserConnected = async () => {
    try {
      const { data } = await axios.get(GET_INFO_URL)

      setUser(data)
    } catch (error) {}
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRoutes />
    </UserContext.Provider>
  )
}

export default App
