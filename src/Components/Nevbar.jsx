import React from 'react'
import { User } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = ({ theme, setTheme, user }) => {
  return (
    <nav className="z-50 h-16 flex items-center px-6 lg:px-12 justify-between w-full absolute top-0 bg-[#0f171e]/60 backdrop-blur-md">
      
      <div className="flex items-center gap-8">
        <span className="font-bold text-2xl tracking-tighter text-white flex items-center">
          prime <span className="text-[#00a8e1] ml-1">video</span>
        </span>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-300">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/" className="hover:text-white transition">Store</Link>
          <Link to="/" className="hover:text-white transition">Live TV</Link>
          <Link to="/" className="hover:text-white transition">Categories</Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/login">
          <div className="w-9 h-9 rounded-full bg-[#1a242f] border border-gray-600 flex items-center justify-center text-white hover:border-[#00a8e1] transition-colors">
            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : <User className="w-5 h-5 text-gray-400" />}
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
