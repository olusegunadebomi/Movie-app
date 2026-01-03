// import { useEffect } from "react";
// const [movies, setMovies] = useState<MyContext["movies"]>([]);
// const [series, setSeries] = useState<MyContext["movies"]>([]);

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = import.meta.env.VITE_OMDB_API_URL;

async function fetchFromAPI(query: string) {
  if (!API_URL || !API_KEY) {
    console.error(
      "OMDB API URL or KEY is not set (VITE_OMDB_API_URL / VITE_OMDB_API_KEY)"
    );
    return [];
  }

  try {
    const q = encodeURIComponent(query);
    const res = await fetch(`${API_URL}?s=${q}&apikey=${API_KEY}`);

    if (!res.ok) {
      throw new Error(`Network response was not ok (${res.status})`);
    }

    const data = await res.json();

    // OMDB returns { Response: "True", Search: [...] } or { Response: "False", Error: "..." }
    if (data && data.Response === "True" && Array.isArray(data.Search)) {
      return data.Search;
    }

    if (data && data.Response === "False") {
      console.warn("OMDB returned no results:", data.Error || "unknown");
      return [];
    }

    return data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export const searchMovies = (search: string) => fetchFromAPI(search);

export const fetchMovies = () => fetchFromAPI("movie");
export const fetchSeries = () => fetchFromAPI("series");
export const fetchMoviesByPage = (search: string, page: number = 1) =>
  fetchFromAPI(`${search}&page=${page}`);
