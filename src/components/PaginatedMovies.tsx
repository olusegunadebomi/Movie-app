import { useEffect, useState } from "react";
import { fetchMoviesPage } from "../Services/Data";
import { MovieData, MovieSearchPage } from "../types";
import Movie from "./Movie";

interface PaginatedMoviesProps {
  heading: string;
  initialPage: MovieSearchPage;
  search: string;
  defaultSearch: string;
  type: "movie" | "series";
}

function PaginatedMovies({
  heading,
  initialPage,
  search,
  defaultSearch,
  type,
}: PaginatedMoviesProps) {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<MovieData[]>(initialPage.results);
  const [totalResults, setTotalResults] = useState(initialPage.totalResults);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const totalPages = Math.min(100, Math.ceil(totalResults / 10));

  const changePage = (nextPage: number) => {
    if (isLoading || nextPage < 1 || nextPage > totalPages) return;
    setIsLoading(true);
    setPage(nextPage);
  };

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    if (!search.trim() && page === 1) {
      setResults(initialPage.results);
      setTotalResults(initialPage.totalResults);
      setIsLoading(false);
      setError("");
      return;
    }

    let isCurrentRequest = true;
    setIsLoading(true);
    setError("");

    fetchMoviesPage(search.trim() || defaultSearch, page, type)
      .then((data) => {
        if (!isCurrentRequest) return;
        setResults(data.results);
        setTotalResults(data.totalResults);
      })
      .catch(() => {
        if (isCurrentRequest) {
          setError("Could not load results. Please try again.");
        }
      })
      .finally(() => {
        if (isCurrentRequest) setIsLoading(false);
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [defaultSearch, initialPage, page, search, type]);

  return (
    <section>
      <h1 className="font-light text-xl leading-6 tracking-tighter mb-6 text-white md:text-4xl md:leading-10 md:tracking-wide lg:mb-8">
        {heading}
      </h1>

      {isLoading && (
        <p className="mb-4 text-white" role="status">
          Loading results...
        </p>
      )}
      {error && (
        <p className="mb-4 text-white" role="alert">
          {error}
        </p>
      )}
      {!isLoading && !error && results.length === 0 && (
        <p className="mb-4 text-white">No results found.</p>
      )}

      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5 2xl:gap-9">
        {results.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          className="mt-8 flex items-center justify-center gap-5 text-white"
          aria-label={`${heading} pagination`}
        >
          <button
            type="button"
            className="px-4 py-2 border border-white/40 disabled:opacity-40"
            onClick={() => changePage(page - 1)}
            disabled={page === 1 || isLoading}
          >
            Previous
          </button>
          <span aria-live="polite">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            className="px-4 py-2 border border-white/40 disabled:opacity-40"
            onClick={() => changePage(page + 1)}
            disabled={page >= totalPages || isLoading}
          >
            Next
          </button>
        </nav>
      )}
    </section>
  );
}

export default PaginatedMovies;
