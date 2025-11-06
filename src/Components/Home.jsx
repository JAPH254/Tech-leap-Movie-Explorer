import { useState } from "react";
import TrendingMovies from "./TrendingMovies";
import SearchMovies from "./SearchMovies";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 bg-gray-100">
        <h1>Movie Explorer</h1>
        <SearchMovies />
        <TrendingMovies />
      </div>
    </>
  );
}

export default Home;
