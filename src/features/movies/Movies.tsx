import { useLoaderData } from "react-router-dom";
import Movie from "../../components/Movie";
import { useData } from "../../context/cont";
import { MovieData } from "../../types";
import { useEffect } from "react";

function Movies() {
  const moviesLoaders = useLoaderData() as MovieData[];
  const { setMovies, movies, query } = useData();

  useEffect(() => {
    setMovies(moviesLoaders);
  }, [moviesLoaders, setMovies]);
  return (
    <>
      <h1 className="font-light text-xl leading-6 tracking-tighter mb-6 text-white md:text-4xl md:leading-10 md:tracking-wide lg:mb-8">
        Movies
      </h1>
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5 2xl:gap-9">
        {(query && movies.length > 0 ? movies : moviesLoaders).map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Movies;
