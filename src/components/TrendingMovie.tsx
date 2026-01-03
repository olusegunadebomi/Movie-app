import MovieSVG from "../assets/icon-category-movie.svg";
import PlaySVG from "../assets/icon-play.svg";
import EmptyBookmarkSVG from "../assets/icon-bookmark-empty.svg";
import { useState } from "react";

function TrendingMovie() {
  const [bookmarkHover, setBookmarkHover] = useState(false);

  return (
    <div className="mb-6 w-60 h-35 relative md:w-full md:h-58 md:mb-10">
      <div className="relative group cursor-pointer">
        <img
          src=""
          alt="movie"
          className={`w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:opacity-50 ${
            bookmarkHover ? "opacity-75 blur-[1px]" : ""
          }`}
        />
        <div className="absolute inset-0 hidden group-hover:flex items-center justify-center rounded-lg">
          <div className="flex items-center gap-4 px-2 py-1 bg-white bg-opacity-25 rounded-full">
            <img
              src={PlaySVG}
              alt="play"
              className="w-4 h-4 scale-75 md:scale-100"
            />
            <span className="font-medium text-lg text-white">Play</span>
          </div>
        </div>
      </div>

      <button
        onMouseEnter={() => setBookmarkHover(true)}
        onMouseLeave={() => setBookmarkHover(false)}
        className="absolute top-2 right-2 md:top-4 md:right-6 w-8 h-8 flex items-center justify-center rounded-full border border-white bg-gray-900 bg-opacity-50 hover:opacity-50"
      >
        <img src={EmptyBookmarkSVG} alt="bookmark" />
      </button>

      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
        <div
          className={`flex items-center gap-2 text-xs md:text-sm font-light text-white opacity-75 mb-1 transition-all duration-300 ${
            bookmarkHover ? "scale-105 text-sm md:text-base" : ""
          }`}
        >
          <span>2024</span>
          <div className="w-1 h-1 rounded-full border border-white" />
          <div className="flex items-center gap-1">
            <img
              src={MovieSVG}
              alt="category"
              className="w-3 h-3 scale-85 md:scale-100"
            />
            <span>Movie</span>
          </div>
          <div className="w-1 h-1 rounded-full border border-white" />
          <span>PG</span>
        </div>
        <h3
          className={`font-medium text-base md:text-2xl text-white transition-transform duration-300 ${
            bookmarkHover ? "scale-105 md:scale-110 md:text-3xl" : ""
          }`}
        >
          Trending Movie Title
        </h3>
      </div>
    </div>
  );
}

export default TrendingMovie;
