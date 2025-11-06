import React, { useEffect, useState } from "react";
import { fetchFromTMDB } from "../api/tmdb";
import MovieModal from "./MovieModal";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    fetchFromTMDB("/trending/movie/week", { page }).then((data) =>
      setMovies(data.results)
    );
  }, [page]);

  return (
    <div className="">
      <h2 className="text-base font-bold mb-6 text-gray-800 text-center">
        Gallery 🎬
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => setSelectedMovieId(movie.id)}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>

            <div className="p-3">
              <h3 className="text-md font-semibold text-gray-800 line-clamp-1">
                {movie.title}
              </h3>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                <span>{movie.release_date?.slice(0, 4)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm font-medium"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm font-medium"
        >
          Next
        </button>
      </div>

      {selectedMovieId && (
        <MovieModal
          movieId={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
    </div>
  );
};

export default TrendingMovies;
