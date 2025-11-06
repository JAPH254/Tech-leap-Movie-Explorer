import { useState } from "react";
import MovieDetails from "./Components/MovieDetails";
import SearchMovies from "./Components/SearchMovies";
import TrendingMovies from "./Components/TrendingMovies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Movie Explorer</h1>
        <SearchMovies />
        <TrendingMovies />
        <MovieDetails />
      </div>
    </>
  );
}

export default App;
