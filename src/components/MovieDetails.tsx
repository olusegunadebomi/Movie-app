import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../Services/Data";
import { useData } from "../context/cont";
import { MovieData, MovieDetailsData } from "../types";

function MovieDetails() {
  const { imdbID } = useParams();
  const { bookmarks, toggleBookmark } = useData();
  const [movie, setMovie] = useState<MovieDetailsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!imdbID) {
      setError("Movie not found.");
      setIsLoading(false);
      return;
    }

    let isCurrentRequest = true;
    setIsLoading(true);
    setError("");

    fetchMovieDetails(imdbID)
      .then((details) => {
        if (isCurrentRequest) setMovie(details);
      })
      .catch((requestError: unknown) => {
        if (!isCurrentRequest) return;
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Could not load movie details.",
        );
        setMovie(null);
      })
      .finally(() => {
        if (isCurrentRequest) setIsLoading(false);
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [imdbID]);

  const bookmarkMovie: MovieData | null = movie
    ? {
        Title: movie.Title,
        Year: movie.Year,
        imdbID: movie.imdbID,
        Poster: movie.Poster,
        Type: movie.Type,
        category: movie.Type === "series" ? "TV Series" : "Movie",
      }
    : null;
  const isBookmarked = bookmarks.some(
    (savedMovie) => savedMovie.imdbID === movie?.imdbID,
  );

  return (
    <section className="max-w-6xl">
      <Link
        to="/movies"
        className="inline-flex min-h-10 items-center text-sm text-white/75 hover:text-white"
      >
        Back to movies
      </Link>

      {isLoading && (
        <p className="mt-8 text-white" role="status">
          Loading details...
        </p>
      )}
      {!isLoading && error && (
        <p className="mt-8 text-white" role="alert">
          {error}
        </p>
      )}

      {!isLoading && movie && (
        <article className="mt-5 grid gap-7 md:grid-cols-[minmax(220px,320px)_1fr] md:gap-10">
          {movie.Poster && movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              className="w-full max-w-sm aspect-2/3 object-cover rounded-lg"
            />
          ) : (
            <div className="flex aspect-2/3 w-full max-w-sm items-center justify-center bg-white/10 text-white/60">
              Poster unavailable
            </div>
          )}

          <div className="min-w-0">
            <p className="mb-2 text-sm uppercase text-white/60">
              {movie.Type === "series" ? "TV Series" : "Movie"} · {movie.Year}
            </p>
            <h1 className="text-3xl font-medium leading-tight text-white md:text-4xl">
              {movie.Title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-white/70">
              <span>{movie.Released}</span>
              <span aria-hidden="true">·</span>
              <span>{movie.Runtime}</span>
              <span aria-hidden="true">·</span>
              <span>{movie.Rated}</span>
              {movie.Genre !== "N/A" && <span>· {movie.Genre}</span>}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => bookmarkMovie && toggleBookmark(bookmarkMovie)}
                aria-pressed={isBookmarked}
                className="min-h-11 border border-white/50 px-4 text-sm text-white hover:bg-white/10"
              >
                {isBookmarked ? "Remove bookmark" : "Add to bookmarks"}
              </button>
              {movie.imdbRating !== "N/A" && (
                <span className="text-sm text-white/75">
                  IMDb {movie.imdbRating}/10
                </span>
              )}
            </div>

            <p className="mt-7 max-w-3xl leading-7 text-white/85">
              {movie.Plot}
            </p>

            <dl className="mt-7 grid gap-x-8 sm:grid-cols-2">
              {[
                ["Director", movie.Director],
                ["Writers", movie.Writer],
                ["Cast", movie.Actors],
                ["Country", movie.Country],
                ["Language", movie.Language],
                ["Awards", movie.Awards],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-white/15 py-3">
                  <dt className="text-xs uppercase text-white/55">{label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-white/90">
                    {value && value !== "N/A" ? value : "Not available"}
                  </dd>
                </div>
              ))}
            </dl>

            {movie.Ratings.length > 0 && (
              <div className="mt-5 border-t border-white/15 pt-4">
                <h2 className="text-xs uppercase text-white/55">Ratings</h2>
                <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/90">
                  {movie.Ratings.map((rating) => (
                    <li key={rating.Source}>
                      {rating.Source}: {rating.Value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      )}
    </section>
  );
}

export default MovieDetails;
