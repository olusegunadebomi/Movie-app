// import { use } from "react";
import { useData } from "../context/cont";
import { MovieData } from "../types";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }: { movie: MovieData }) {
  const { bookmarks, toggleBookmark } = useData();
  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    toggleBookmark(movie);
    navigate("/bookmarks");
  };

  const isBookmarked = bookmarks.some(
    (bookmarkedMovie) => bookmarkedMovie.imdbID === movie.imdbID
  );
  return (
    <div>
      <button onClick={handleBookmarkClick}>
        {isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
      </button>
    </div>
  );
}
