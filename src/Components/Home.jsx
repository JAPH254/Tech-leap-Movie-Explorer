import { useState } from "react";
import TrendingMovies from "./TrendingMovies";
import SearchMovies from "./SearchMovies";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Movie Explorer</h1>
        <SearchMovies />
        <TrendingMovies />
      </div>
    </>
  );
}

export default Home;
