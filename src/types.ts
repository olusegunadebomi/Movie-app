export interface MovieData {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
  category: "Movie" | "TV Series";
  // thumbnail: {
  //   trending?: {
  //     small: string;
  //     large: string;
  //   };
  //   regular: {
  //     small: string;
  //     medium: string;
  //     large: string;
  //   };
  // };
  // year: number;
  // category: "Movie" | "TV Series";
  // rating: string;
  // isBookmarked: boolean;
  // isTrending?: boolean;
}

export interface SearchProps {
  placeholder: string;
  searchInput: string;
  setSearchInput: (value: string) => void;
}

export interface MovieProps {
  movie: MovieData;
}

export interface PageProps {
  data: MovieData[];
  setData: (data: MovieData[]) => void;
  searchInput: string;
  setSearchInput: (value: string) => void;
  searchResults: number;
  setSearchResults: (count: number) => void;
}

export interface TrendingMovieProps {
  movie: MovieData;
  setData: (data: MovieData[]) => void;
  data: MovieData[];
}

export interface TrendingProps {
  data: MovieData[];
  setData: (data: MovieData[]) => void;
}
export interface MoviesProps {
  data: MovieData[];
  setData: (data: MovieData[]) => void;
}

export interface SeriesProps {
  data: MovieData[];
  setData: (data: MovieData[]) => void;
}

export interface BookmarksProps {
  data: MovieData[];
  setData: (data: MovieData[]) => void;
}

export interface DataProps {
  data: any;
}

export interface MyContext {
  movies: MovieData[];
  series: MovieData[];
  bookmarks: MovieData[];
  page: number;
  query: string;
  setQuery: (query: string) => void;
  setPage: (page: number) => void;
  toggleBookmark: (movie: MovieData) => void;
  setBookmarks: (bookmarks: MovieData[]) => void;
  setSeries: (series: MovieData[]) => void;
  setMovies: (movies: MovieData[]) => void;
}
