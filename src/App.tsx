import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./features/home/Home";
import Movies from "./features/movies/Movies";
import Series from "./features/series/Series";
import Bookmarks from "./features/bookmarks/Bookmarks";
import AppLayout from "./components/AppLayout";
import { MoviesLoaders } from "./Loaders/MoviesLoaders";
import { SeriesLoaders } from "./Loaders/SeriesLoaders";
import { HomeLoaders } from "./Loaders/HomeLoaders";

const base =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.slice(0, -1);

const routes = createBrowserRouter(
  [
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Home />,
          loader: HomeLoaders,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: MoviesLoaders,
        },
        {
          path: "/series",
          element: <Series />,
          loader: SeriesLoaders,
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />,
        },
      ],
    },
  ],
  {
    basename: base,
  }
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
