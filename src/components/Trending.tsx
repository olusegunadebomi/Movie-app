import TrendingMovie from "./TrendingMovie";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useData } from "../context/cont";

function Trending() {
  const { movies } = useData();
  return (
    <div className="mr-4 md:mr-6 lg:mr-9">
      <h1 className="font-light text-xl leading-6 tracking-tighter mb-4 text-white md:mb-6 md:text-4xl md:leading-10 md:tracking-wide">
        Trending
      </h1>
      <Splide
        aria-label="Trending Movies"
        options={{
          rewind: true,
          perPage: 3,
          arrows: true,
          pagination: true,
          autoplay: false,
          autoWidth: true,
          breakpoints: {
            768: { perPage: 2, gap: "0.5rem" },
            1024: { perPage: 3, gap: "0.75rem" },
            1440: { perPage: 4, gap: "1rem" },
          },
        }}
      >
        {movies.slice(0, 10).map((movie) => (
          <SplideSlide key={movie.imdbID}>
            <TrendingMovie movie={movie} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Trending;
