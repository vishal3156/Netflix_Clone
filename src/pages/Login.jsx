import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { user, logIn } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await logIn(email, password)
      navigate("/")
    } catch (error) {
      console.log(error)
      setError("Invalid credentials. Try again!")
    }
  }
  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="signup page"
        />
        <div className="from-black bg-gradient-to-b fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="mx-w-[320px] my-auto mx-10 py-20">
              <h1 className="text-3xl text-center font-bold">Sign In</h1>
              {error ? (
                <p className="p-3 text-center text-red-500 md:text-xl my-2">
                  {error}
                </p>
              ) : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-5 mt-5 my-2 bg-gray-800 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-5 my-2 bg-gray-800 rounded "
                  type="password"
                  placeholder="Password"
                  autoComplete="current password"
                />
                <button className="bg-red-600 py-3 my-6 mb-1 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <p className="text-lg mt-0">
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                </div>
                <p className="py-14 text-xl text-center">
                  <span className="text-gray-400 text-lg">New to Netflix?</span>{" "}
                  <Link to="/signup">Sign up here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
