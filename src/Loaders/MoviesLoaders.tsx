import { fetchMovies } from "../Services/Data";

export async function MoviesLoaders() {
  const movies = await fetchMovies();
  return movies;
}
