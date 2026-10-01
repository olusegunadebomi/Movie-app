import { useLoaderData } from "react-router-dom";
import PaginatedMovies from "../../components/PaginatedMovies";
import { useData } from "../../context/cont";
import { MovieSearchPage } from "../../types";

function Series() {
  const initialPage = useLoaderData() as MovieSearchPage;
  const { query } = useData();

  return (
    <PaginatedMovies
      heading="TV Series"
      initialPage={initialPage}
      search={query}
      defaultSearch="series"
      type="series"
    />
  );
}

export default Series;
