import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromTMDB } from "../api/tmdb";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchFromTMDB(`/movie/${id}`, {
      append_to_response: "credits,reviews",
    }).then(setMovie);
  }, [id]);
  if (!movie) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg w-64"
        />
        <div>
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p className="text-gray-600 mt-2">{movie.overview}</p>
          <p className="mt-4 font-semibold">Release: {movie.release_date}</p>
          <p className="font-semibold">Rating: {movie.vote_average}/10</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Cast</h2>
        <div className="flex overflow-x-auto gap-4">
          {movie.credits?.cast?.slice(0, 10).map((c) => (
            <div key={c.id} className="text-center min-w-[100px]">
              <img
                src={`https://image.tmdb.org/t/p/w200${c.profile_path}`}
                alt={c.name}
                className="rounded-full w-24 h-24 object-cover mx-auto"
              />
              <p className="text-sm mt-2">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
