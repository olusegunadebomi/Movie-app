import MovieSVG from "../assets/icon-category-movie.svg";
// import SeriesSVG from "../assets/icon-category-tv.svg";
import PlaySVG from "../assets/icon-play.svg";
import EmptyBookmarkSVG from "../assets/icon-bookmark-empty.svg";
import FullBookmarkSVG from "../assets/icon-bookmark-full.svg";
import { useState } from "react";
import { useData } from "../context/cont";
import { MovieProps } from "../types";

function Movie({ movie }: MovieProps) {
  if (!movie) return null;
  const [bookmarkHover, setBookmarkHover] = useState(false);
  const { bookmarks, toggleBookmark } = useData();
  const isBookmarked = bookmarks.some((b) => b.imdbID === movie.imdbID);
  const { Title: title, Year: year, Poster: poster } = movie;

  return (
    <div className="w-full min-w-0">
      <div className="relative w-full aspect-4/3">
        <div className="relative group cursor-pointer">
          <img
            src={poster || ""}
            alt={title || "Movie Poster"}
            className={`block w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:opacity-50 ${
              bookmarkHover ? "opacity-75 blur-[1px]" : ""
            }`}
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg">
            <div className="flex items-center gap-4 px-2 py-1 bg-opacity-25 rounded-full">
              <img
                src={PlaySVG}
                alt="play"
                className="w-4 h-4 scale-75 md:scale-100"
              />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium text-lg text-white">
                Play
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => toggleBookmark(movie)}
          aria-pressed={isBookmarked}
          onMouseEnter={() => setBookmarkHover(true)}
          onMouseLeave={() => setBookmarkHover(false)}
          className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 flex items-center justify-center rounded-full border border-white bg-gray-900 bg-opacity-50 hover:opacity-50 hover:text-3xl transition-all duration-300"
        >
          <img
            src={isBookmarked ? FullBookmarkSVG : EmptyBookmarkSVG}
            alt="bookmark"
          />
        </button>

        <div className="mt-1">
          <div
            className={`flex items-center gap-2 text-xs md:text-sm font-light text-white opacity-75 transition-all duration-300 ${
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
              <span>Movie</span>
            </div>
            <div className="w-1 h-1 rounded-full border border-white" />
            <span>PG</span>
          </div>
          <h3
            className={`truncate font-medium text-sm md:text-lg text-white transition-transform duration-300 ${
              bookmarkHover ? "scale-105 md:scale-110 md:text-xl" : ""
            }`}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Movie;
