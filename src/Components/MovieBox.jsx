import React from "react";

const MovieBox = ({ a, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 bg-[#1a242f] shadow-lg border border-transparent hover:border-[#00a8e1]"
    >
      <div className="aspect-[2/3] relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${a.poster_path}`}
          alt={a.title}
          className="w-full h-full object-cover"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
           <h2 className="text-white text-xs font-bold truncate mb-1">
            {a.title}
          </h2>
          <div className="flex items-center gap-2 text-[10px] text-[#00a8e1] font-bold">
            <span>⭐ {a.vote_average?.toFixed(1)}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">{a.release_date?.split('-')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
