import { useLoaderData } from "react-router-dom";
import { MovieData } from "../types";
import Search from "./Search";
import Trending from "./Trending";
import Movie from "./Movie";
import { useData } from "../context/cont";

function Home() {
  const { movies, series, query } = useData();

  const combined = [...movies, ...series];
  const recommended = combined.slice(0, 10);

  const recommendedText =
    recommended.length === 0 ? "No Recommended" : "Recommended for you";

  return (
    <div>
      <Search placeholder="Search for movies or TV series" />
      <Trending />
      <h1 className="font-light text-xl leading-6 tracking-tighter mb-6 text-white md:text-4xl md:leading-10 md:tracking-wide lg:mb-8">
        {recommendedText}
      </h1>
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5 2xl:gap-9">
        {recommended.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
