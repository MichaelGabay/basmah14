import React from "react"
import { Link } from "react-router-dom"
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
  return (
    <nav className="px-2 py-5 bg-blue-950 text-white flex items-center gap-2">
      {links.map((l) => (
        <Link key={l.to} className="text-xl hover:text-yellow-400" to={l.to}>
          {l.title}
        </Link>
      ))}
    </nav>
  )
}

export default NavBar
