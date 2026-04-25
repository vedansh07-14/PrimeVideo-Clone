import { Info, Play, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const HeaderBg = ({ movies, theme, setTheme }) => {
  const movie = movies?.[0]

  if (!movie) return null

  return (
    <div className="relative w-screen h-[85vh] overflow-hidden bg-[#0f171e]">
      
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f171e] via-[#0f171e]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f171e] via-transparent to-transparent" />

      <div className="absolute top-[25%] left-[6%] max-w-2xl text-white">
        
        <h1 className="text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          {movie.title}
        </h1>

        <div className="flex items-center gap-4 mb-6 text-sm font-semibold">
          <div className="flex items-center gap-1 text-[#00a8e1]">
            <Star className="w-4 h-4 fill-[#00a8e1]" />
            {movie.vote_average?.toFixed(1)}
          </div>
          <span className="text-gray-400">|</span>
          <span className="text-gray-300">{movie.release_date?.split('-')[0]}</span>
          <span className="px-2 py-0.5 border border-gray-500 text-xs rounded text-gray-400 uppercase">16+</span>
        </div>

        <p className="text-lg text-gray-200 mb-8 line-clamp-3 max-w-xl">
          {movie.overview}
        </p>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded font-bold hover:bg-gray-200 transition shadow-xl">
            <Play className="w-5 h-5 fill-black" />
            Watch Now
          </button>

          <button className="flex items-center gap-3 px-8 py-4 bg-[#1a242f]/80 text-white rounded font-bold border border-gray-600 hover:bg-[#1a242f] transition shadow-xl">
            <Info className="w-5 h-5" />
            More Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderBg
