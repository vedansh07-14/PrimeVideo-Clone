import React, { useState, useEffect } from "react";
import MovieBox from "./MovieBox";

const GENRES = [
  { id: null, label: "All" },
  { id: 28, label: "Action" },
  { id: 878, label: "Sci-Fi" },
  { id: 10749, label: "Romance" },
  { id: 12, label: "Adventure" },
  { id: 18, label: "Drama" },
];

const Filter = ({ theme }) => {
  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ1Y2JjN2Y4NTBmMzA2OWNjOGVkMjgxYzhhNzg4YSIsIm5iZiI6MTc3Mzk4MzQyMC43NDQsInN1YiI6IjY5YmNkNmJjYTRhZmM4NDA1MmVhMzc0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kDA24DOPaSq7wieMN2qLmw0C_HlktWOeJyb8s5VvSFo",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results ?? []);
        setLoading(false);
        // Removed scrollTo so user can see the grid better
      })
      .catch(() => setLoading(false));
  }, [page]);

  const filtered = activeGenre
    ? movies.filter((m) => m.genre_ids.includes(activeGenre))
    : movies;

  return (
    <div className="min-h-screen w-full px-6 lg:px-12 py-12 bg-[#0f171e]">
      
      {/* 🎯 Genre Buttons */}
      <div className="flex flex-wrap gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        {GENRES.map(({ id, label }) => (
          <button
            key={label}
            onClick={() => {
              setActiveGenre(id);
              setPage(1);
            }}
            className={`px-6 py-2 rounded font-bold text-sm transition-all
              ${
                activeGenre === id
                  ? "bg-[#00a8e1] text-white shadow-lg"
                  : "bg-[#1a242f] text-gray-400 hover:text-white hover:bg-[#252e39]"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 🎬 Movies Grid */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[2/3] rounded-md bg-[#1a242f] animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((movie) => (
            <MovieBox
              key={movie.id}
              a={movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      )}

      {/* 🔥 Pagination */}
      <div className="flex justify-center items-center gap-3 mt-16">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-5 py-2 bg-[#1a242f] text-white rounded font-bold disabled:opacity-30 hover:bg-[#252e39] transition border border-gray-700"
        >
          Previous
        </button>

        <div className="hidden sm:flex gap-2">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-10 h-10 rounded font-bold transition
                ${
                  page === i + 1
                    ? "bg-[#00a8e1] text-white"
                    : "bg-[#1a242f] text-gray-400 hover:text-white"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          disabled={page === 10}
          onClick={() => setPage((p) => p + 1)}
          className="px-5 py-2 bg-[#1a242f] text-white rounded font-bold disabled:opacity-30 hover:bg-[#252e39] transition border border-gray-700"
        >
          Next
        </button>
      </div>

      {/* 🎥 Modal */}
      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1a242f] text-white rounded-lg overflow-hidden shadow-2xl
                       w-full max-w-4xl max-h-[90vh]
                       relative flex flex-col md:flex-row"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 text-2xl hover:text-[#00a8e1] transition z-10"
            >
              ✕
            </button>

            {/* Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:w-1/2 overflow-y-auto">
              <h2 className="text-3xl font-bold mb-4">
                {selectedMovie.title}
              </h2>

              <div className="flex items-center gap-4 mb-6 text-[#00a8e1] font-bold">
                <span>⭐ {selectedMovie.vote_average}</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-300">{selectedMovie.release_date}</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                {selectedMovie.overview}
              </p>

              <div className="flex gap-4">
                 <button className="flex-1 py-3 bg-white text-black rounded font-bold hover:bg-gray-200 transition">
                  Watch Now
                </button>
                <button className="flex-1 py-3 bg-[#252e39] text-white rounded font-bold border border-gray-600 hover:bg-[#2d3744] transition">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
