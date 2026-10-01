import { fetchMoviesPage } from "../Services/Data";

export async function MoviesLoaders() {
  return fetchMoviesPage("movie", 1, "movie");
}
