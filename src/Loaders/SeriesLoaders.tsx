import { fetchMoviesPage } from "../Services/Data";

export async function SeriesLoaders() {
  return fetchMoviesPage("series", 1, "series");
}
