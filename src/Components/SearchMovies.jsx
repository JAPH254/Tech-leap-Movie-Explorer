import React, { useState } from "react";
import { fetchFromTMDB } from "../api/tmdb";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const data = await fetchFromTMDB("/search/movie", {
      query,
      include_adult: "false",
    });
    setMovies(data.results);
  };

  return (
    <div className="p-4 text-sm">
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="border rounded px-3 py-2 flex-grow"
        />
        <button className="bg-blue-500 text-white px-4 rounded">Search</button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="rounded-lg shadow bg-white">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-t-lg"
            />
            <div className="p-2 text-sm font-medium">{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
