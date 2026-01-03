import { useLoaderData } from "react-router-dom";
import Movie from "../../components/Movie.tsx";
import { useData } from "../../context/cont.tsx";
import { MovieData } from "../../types.ts";
import { useEffect } from "react";

function Series() {
  const seriesLoaders = useLoaderData() as MovieData[];
  const { setSeries } = useData();

  useEffect(() => {
    setSeries(seriesLoaders);
  }, [seriesLoaders, setSeries]);

  return (
    <>
      <h1 className="font-light text-xl leading-6 tracking-tighter mb-6 text-white md:text-4xl md:leading-10 md:tracking-wide lg:mb-8">
        TV Series
      </h1>
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5 2xl:gap-9">
        {seriesLoaders.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Series;
