import { createContext, useContext, useEffect, useState } from "react";
import { MovieData, MyContext } from "../types";

const DataContext = createContext<MyContext | null>(null);

function DataProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [series, setSeries] = useState<MovieData[]>([]);
  const [bookmarks, setBookmarks] = useState<MovieData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const toggleBookmark = (movie: MovieData) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.some(
        (bookmarkedMovie) => bookmarkedMovie.imdbID === movie.imdbID
      )
        ? prevBookmarks.filter((m) => m.imdbID !== movie.imdbID)
        : [...prevBookmarks, movie]
    );
  };

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
