import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signpage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill all fields")
      return
    }

    const users = JSON.parse(localStorage.getItem("users")) || []

    if (isLogin) {
      const existingUser = users.find(
        (u) => u.email === email && u.password === password
      )

      if (!existingUser) {
        alert("Invalid credentials")
        return
      }

      localStorage.setItem("currentUser", JSON.stringify(existingUser))
    } else {
      const newUser = { name, email, password }
      users.push(newUser)

      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(newUser))
    }

    navigate("/")
  }

  return (
    <div className="min-h-screen bg-[#0f171e] flex flex-col items-center py-12 px-4">
      
      {/* Logo */}
      <div className="mb-8">
        <span className="font-bold text-3xl tracking-tighter text-white flex items-center">
          prime <span className="text-[#00a8e1] ml-1">video</span>
        </span>
      </div>

      {/* CARD */}
      <div className="w-full max-w-[350px] bg-white rounded-lg p-8 shadow-md border border-gray-300">
        
        <h2 className="text-3xl font-normal text-gray-900 mb-6">
          {isLogin ? "Sign-In" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {!isLogin && (
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-900">Your name</label>
              <input
                type="text"
                placeholder="First and last name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 text-sm text-black border border-gray-400 rounded focus:border-[#00a8e1] focus:ring-1 focus:ring-[#00a8e1] outline-none shadow-sm"
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-900">Email or mobile phone number</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 text-sm text-black border border-gray-400 rounded focus:border-[#00a8e1] focus:ring-1 focus:ring-[#00a8e1] outline-none shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-900">Password</label>
            <input
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 text-sm text-black border border-gray-400 rounded focus:border-[#00a8e1] focus:ring-1 focus:ring-[#00a8e1] outline-none shadow-sm"
            />
          </div>

          <button className="bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] text-gray-900 py-2 rounded border border-[#a88734] font-normal hover:from-[#f5d172] transition shadow-sm mt-2 text-sm">
            {isLogin ? "Sign-In" : "Create your Amazon account"}
          </button>
        </form>

        <p className="text-xs text-gray-800 mt-6 leading-relaxed">
          By continuing, you agree to Amazon's <span className="text-[#0066c0] hover:underline cursor-pointer">Conditions of Use</span> and <span className="text-[#0066c0] hover:underline cursor-pointer">Privacy Notice</span>.
        </p>

        <div className="mt-8 pt-6 border-t border-gray-300">
           <div className="relative flex justify-center text-xs mb-6">
            <span className="bg-white px-2 text-gray-500 z-10">
              {isLogin ? "New to Amazon?" : "Already have an account?"}
            </span>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300"></div>
          </div>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full py-1.5 text-sm bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border border-gray-400 rounded hover:from-[#e7e9ec] transition shadow-sm text-gray-900"
          >
            {isLogin ? "Create your Amazon account" : "Sign-In"}
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 flex gap-6 text-[11px] text-[#0066c0]">
        <a href="#" className="hover:underline">Conditions of Use</a>
        <a href="#" className="hover:underline">Privacy Notice</a>
        <a href="#" className="hover:underline">Help</a>
      </div>
      <p className="mt-2 text-[11px] text-gray-500">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  )
}

export default Signpage
