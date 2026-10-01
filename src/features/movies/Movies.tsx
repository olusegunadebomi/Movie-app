import { useLoaderData } from "react-router-dom";
import PaginatedMovies from "../../components/PaginatedMovies";
import { useData } from "../../context/cont";
import { MovieSearchPage } from "../../types";

function Movies() {
  const initialPage = useLoaderData() as MovieSearchPage;
  const { query } = useData();

  return (
    <PaginatedMovies
      heading="Movies"
      initialPage={initialPage}
      search={query}
      defaultSearch="movie"
      type="movie"
    />
  );
}

export default Movies;
