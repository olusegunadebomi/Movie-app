// import { useEffect } from "react";
// const [movies, setMovies] = useState<MyContext["movies"]>([]);
// const [series, setSeries] = useState<MyContext["movies"]>([]);

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = import.meta.env.VITE_OMDB_API_URL;

async function fetchFromAPI(query: string) {
  try {
    const q = encodeURIComponent(query);
    const res = await fetch(`${API_URL}?s=${q}&apikey=${API_KEY}`);

    if (!res.ok) {
      throw new Error(`Network response was not ok (${res.status})`);
    }

    const data = await res.json();
    return data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

// Search movies by title (uses OMDB `s=` query param)
export const searchMovies = (search: string) => fetchFromAPI(search);

// Backwards-compatible helpers (still simple wrappers)
export const fetchMovies = () => fetchFromAPI("movie");
export const fetchSeries = () => fetchFromAPI("series");
export const fetchMoviesByPage = (page: number) =>
  fetchFromAPI(`movie&page=${page}`);
