import MovieSVG from "../assets/icon-category-movie.svg";
import PlaySVG from "../assets/icon-play.svg";
import EmptyBookmarkSVG from "../assets/icon-bookmark-empty.svg";
import FullBookmarkSVG from "../assets/icon-bookmark-full.svg";
import { useState } from "react";
import { MovieProps } from "../types";
import { useData } from "../context/cont";
import { Link } from "react-router-dom";

function TrendingMovie({ movie }: MovieProps) {
  const [bookmarkHover, setBookmarkHover] = useState(false);
  const { bookmarks, toggleBookmark } = useData();
  const isBookmarked = bookmarks.some((b) => b.imdbID === movie.imdbID);
  const { Title: title, Year: year, Poster: poster } = movie;

  return (
    <div className="relative mb-6 w-[78vw] aspect-video md:w-full md:mb-10">
      <Link
        to={`/movie/${movie.imdbID}`}
        aria-label={`View details for ${title}`}
        className="relative block h-full group cursor-pointer overflow-hidden rounded-lg"
      >
        <img
          src={poster || ""}
          alt={`${title} poster`}
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
        <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
          <div
            className={`flex items-center gap-2 text-xs md:text-sm font-light text-white opacity-75 mb-1 transition-all duration-300 ${
              bookmarkHover ? "scale-105 text-sm md:text-base" : ""
            }`}
          >
            <span>{year}</span>
            <div className="w-1 h-1 rounded-full border border-white" />
            <div className="flex items-center gap-1">
              <img
                src={MovieSVG}
                alt="category"
                className="w-3 h-3 scale-85 md:scale-100"
              />
              <span>{movie.Type === "series" ? "TV Series" : "Movie"}</span>
            </div>
          </div>
          <h3
            className={`truncate font-medium text-base md:text-2xl text-white transition-transform duration-300 ${
              bookmarkHover ? "scale-105 md:scale-110 md:text-3xl" : ""
            }`}
          >
            {title}
          </h3>
        </div>
      </Link>

      <button
        onClick={() => toggleBookmark(movie)}
        aria-pressed={isBookmarked}
        aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        onMouseEnter={() => setBookmarkHover(true)}
        onMouseLeave={() => setBookmarkHover(false)}
        className="absolute top-2 right-2 z-10 md:top-4 md:right-6 w-8 h-8 flex items-center justify-center rounded-full border border-white bg-gray-900 bg-opacity-50 hover:opacity-75"
      >
        <img src={isBookmarked ? FullBookmarkSVG : EmptyBookmarkSVG} alt="" />
      </button>
    </div>
  );
}

export default TrendingMovie;
