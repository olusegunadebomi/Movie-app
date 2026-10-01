// import { useEffect } from "react";
// const [movies, setMovies] = useState<MyContext["movies"]>([]);
// const [series, setSeries] = useState<MyContext["movies"]>([]);

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = import.meta.env.VITE_OMDB_API_URL;

async function fetchSearchPage(
  query: string,
  page: number = 1,
  type?: "movie" | "series",
) {
  if (!API_URL || !API_KEY) {
    console.error(
      "OMDB API URL or KEY is not set (VITE_OMDB_API_URL / VITE_OMDB_API_KEY)",
    );
    return { results: [], totalResults: 0 };
  }

  try {
    const url = new URL(API_URL);
    url.searchParams.set("s", query);
    url.searchParams.set("page", String(page));
    url.searchParams.set("apikey", API_KEY);
    if (type) url.searchParams.set("type", type);

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Network response was not ok (${res.status})`);
    }

    const data = await res.json();

    // OMDB returns { Response: "True", Search: [...] } or { Response: "False", Error: "..." }
    if (data && data.Response === "True" && Array.isArray(data.Search)) {
      return {
        results: data.Search,
        totalResults: Number(data.totalResults) || 0,
      };
    }

    if (data && data.Response === "False") {
      console.warn("OMDB returned no results:", data.Error || "unknown");
      return { results: [], totalResults: 0 };
    }

    return {
      results: Array.isArray(data.Search) ? data.Search : [],
      totalResults: Number(data.totalResults) || 0,
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { results: [], totalResults: 0 };
  }
}

export const fetchMoviesPage = (
  search: string,
  page: number = 1,
  type?: "movie" | "series",
) => fetchSearchPage(search, page, type);

export const searchMovies = async (search: string) =>
  (await fetchSearchPage(search)).results;

export const fetchMovies = async () =>
  (await fetchSearchPage("movie", 1, "movie")).results;
export const fetchSeries = async () =>
  (await fetchSearchPage("series", 1, "series")).results;
