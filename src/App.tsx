import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./features/home/Home.tsx";
import Movies from "./features/movies/Movies.tsx";
import Series from "./features/series/Series.tsx";
import Bookmarks from "./features/bookmarks/Bookmarks.tsx";
import AppLayout from "./components/AppLayout.tsx";
import { MoviesLoaders } from "./Loaders/MoviesLoaders.tsx";
import { SeriesLoaders } from "./Loaders/SeriesLoaders.tsx";
import { HomeLoaders } from "./Loaders/HomeLoaders.tsx";

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
