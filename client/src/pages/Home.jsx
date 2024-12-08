import React, { useContext, useEffect } from "react"
import { useUserContext } from "../context/userContext"
import { axios, useAxios } from "../hooks/useAxios"
const Home = () => {
  const { data, error, status, loading, activate } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "get",
    onSuccess: ({ data }) => {
      console.log(data)
    },
  })

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    )
  return (
    <div>
      staus: {status}
      <ul className="list-disc pl-5 space-y-2">
        {data?.map((post) => (
          <li
            key={post.id}
            className="text-gray-700 font-medium hover:text-blue-500 transition"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
