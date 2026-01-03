import Movie from "../../components/Movie";
import { useData } from "../../context/cont";

function Bookmarks() {
  const { bookmarks } = useData();

  const noBookmarks =
    bookmarks.length === 0 ? (
      <h2 className="text-white  mt-20">No bookmarks added yet.</h2>
    ) : (
      "Bookmarked Movies"
    );

  return (
    <>
      <h1 className="font-light text-xl leading-6 tracking-tighter mb-6 text-white md:text-4xl md:leading-10 md:tracking-wide lg:mb-8">
        {noBookmarks}
      </h1>
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5 2xl:gap-9">
        {bookmarks.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Bookmarks;
