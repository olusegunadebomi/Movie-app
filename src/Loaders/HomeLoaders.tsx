import { fetchMovies } from "../Services/Data";

export async function HomeLoaders() {
  const [movies, series] = await Promise.all([fetchMovies(), fetchMovies()]);
  return { movies, series };
}
