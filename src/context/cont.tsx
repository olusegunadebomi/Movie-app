import { createContext, useContext, useEffect, useState } from "react";
import { MovieData, MyContext } from "../types";
import { searchMovies } from "../Services/Data";
// import fetchTrendingMovies from "../Services/fetchTrending";

const DataContext = createContext<MyContext | null>(null);

function DataProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [series, setSeries] = useState<MovieData[]>([]);
  const [bookmarks, setBookmarks] = useState<MovieData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // Trigger a search when `query` changes and store results in `movies`.

  const toggleBookmark = (movie: MovieData) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.some(
        (bookmarkedMovie) => bookmarkedMovie.imdbID === movie.imdbID
      )
        ? prevBookmarks.filter((m) => m.imdbID !== movie.imdbID)
        : [...prevBookmarks, movie]
    );
  };

  // useEffect(() => {
  //   const loadTrending = async () => {
  //     const data = await fetchTrendingMovies();
  //     setMovies(data);
  //   };

  //   loadTrending();
  // }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setMovies([]);
      return;
    }

    const fetchSearchResults = async () => {
      const [moviesResult, seriesResult] = await Promise.all([
        searchMovies(query),
        searchMovies(query + " series"),
      ]);

      const results = [...moviesResult, ...seriesResult];
      setMovies(results);
      console.log("Search results for", query, ":", results);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        bookmarks,
        setBookmarks,
        toggleBookmark,
        page,
        setPage,
        query,
        setQuery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

export { DataProvider, useData };
