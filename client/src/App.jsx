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
  const [loading, setLoading] = useState(true)

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.status == 401) setUser(null)
    }
  )

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
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    )

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRoutes />
    </UserContext.Provider>
  )
}

export default App
