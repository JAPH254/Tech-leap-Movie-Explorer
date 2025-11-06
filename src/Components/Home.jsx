import { useState } from "react";
import TrendingMovies from "./TrendingMovies";
import SearchMovies from "./SearchMovies";
import { useNavigate } from "react-router-dom";
function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col text-xl font-bold items-center justify-center min-h-screen py-2 px-4 bg-gray-100">
        <div className="flex w-full justify-between items-center mb-6">
          <h1>Movie Explorer</h1>
          <button onClick={handleLogout} className="text-sm bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
        <SearchMovies />
        <TrendingMovies />
      </div>
    </>
  );
}

export default Home;
