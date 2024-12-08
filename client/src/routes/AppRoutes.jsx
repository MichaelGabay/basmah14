import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import NavBar from "../pages/layout/NavBar"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import { useUserContext } from "../context/userContext"

const AppRoutes = () => {
  const { user } = useUserContext()
  return (
    <BrowserRouter>
      <NavBar />
      {user ? (
        <h1>user {user.name} is connected</h1>
      ) : (
        <h1>user is not connected</h1>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
