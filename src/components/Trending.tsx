import TrendingMovie from "./TrendingMovie.tsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Trending() {
  return (
    <div className="mr-4 md:mr-6 lg:mr-9">
      <h1 className="font-light text-xl leading-6 tracking-tighter mb-4 text-white md:mb-6 md:text-4xl md:leading-10 md:tracking-wide">
        Trending
      </h1>
      <Splide
        aria-label="Trending Movies"
        options={{
          rewind: true,
          arrows: false,
          pagination: false,
          autoplay: false,
          autoWidth: true,
          breakpoints: {
            768: {
              gap: "15px",
            },
            1300: {
              gap: "25px",
            },
            1800: {
              gap: "35px",
            },
            2300: {
              gap: "35px",
            },
          },
        }}
      >
        <SplideSlide>
          <TrendingMovie />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Trending;
