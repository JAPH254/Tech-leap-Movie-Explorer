import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchFromTMDB } from "../api/tmdb";

const MovieModal = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState(null);

  // Fetch movie details when modal opens
  useEffect(() => {
    if (movieId) {
      fetchFromTMDB(`/movie/${movieId}`, {
        append_to_response: "credits,reviews",
      })
        .then(setMovie)
        .catch(console.error);
    }
  }, [movieId]);

  if (!movieId) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          {movie ? (
            <div>
              <div className="relative">
                <img
                  src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                  alt={movie.title}
                  className="rounded-t-2xl w-full object-cover max-h-80"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                <p className="text-gray-700 mb-4">{movie.overview}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>⭐ {movie.vote_average}/10</span>
                  <span>📅 {movie.release_date}</span>
                  <span>🎬 {movie.runtime} mins</span>
                </div>

                <h3 className="mt-6 text-lg font-semibold mb-2">Cast</h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {movie.credits?.cast?.slice(0, 8).map((c) => (
                    <div key={c.id} className="text-center min-w-[90px]">
                      <img
                        src={
                          c.profile_path
                            ? `https://image.tmdb.org/t/p/w200${c.profile_path}`
                            : "https://via.placeholder.com/90x90?text=No+Image"
                        }
                        alt={c.name}
                        className="rounded-full w-20 h-20 object-cover mx-auto"
                      />
                      <p className="text-xs mt-1">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">Loading movie details...</div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MovieModal;
