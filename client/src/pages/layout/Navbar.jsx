import React from "react"
import { Link } from "react-router-dom"
import { useUserContext } from "../../context/userContext"
const links = [
  {
    title: "home",
    to: "/",
  },
  {
    title: "signup",
    to: "/signup",
  },
  {
    title: "login",
    to: "/login",
  },
]

const NavBar = () => {
  const { user } = useUserContext()
  return (
    <nav className="px-2 py-5 bg-blue-950 text-white flex items-center gap-2">
      {links.map((l) => (
        <Link key={l.to} className="text-xl hover:text-yellow-400" to={l.to}>
          {l.title}
        </Link>
      ))}
      {user && <p className="text-white">{user.name}</p>}
    </nav>
  )
}

export default NavBar
