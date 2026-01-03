// using automatic JSX runtime; no default React import required
import { NavLink } from "react-router-dom";
import NavHomeSVG from "../assets/icon-nav-home.svg";
import NavMoviesSVG from "../assets/icon-nav-movies.svg";
import NavSeriesSVG from "../assets/icon-nav-tv-series.svg";
import NavBookmarksSVG from "../assets/icon-nav-bookmark.svg";
import LogoSVG from "../assets/logo.svg";
import avatarPNG from "../assets/image-avatar.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full h-14 flex justify-between items-center px-4 bg-gray-900 md:static md:h-18 md:mx-0 md:my-6 md:px-6 md:rounded-lg lg:fixed lg:left-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-24 lg:h-screen lg:flex-col lg:py-9 lg:px-0">
      {/* <img src={LogoSVG} alt="logo" className="scale-75 md:scale-100" /> */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `Navbar ${isActive ? "Navbar-active" : ""}`
        }
      >
        <img src={LogoSVG} alt="logo" className="scale-75 md:scale-100" />
      </NavLink>

      <div className="flex gap-6 md:gap-8 lg:flex-col lg:gap-10">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `Navbar ${isActive ? "Navbar-active" : ""}`
          }
        >
          <img src={NavHomeSVG} alt="home" className="w-6 h-6" />
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `Navbar ${isActive ? "Navbar-active" : ""}`
          }
        >
          <img src={NavMoviesSVG} alt="movies" className="w-6 h-6" />
        </NavLink>

        <NavLink
          to="/series"
          className={({ isActive }) =>
            `Navbar ${isActive ? "Navbar-active" : ""}`
          }
        >
          <img src={NavSeriesSVG} alt="series" className="w-6 h-6" />
        </NavLink>

        <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            `Navbar ${isActive ? "Navbar-active" : ""}`
          }
        >
          <img src={NavBookmarksSVG} alt="bookmarks" className="w-6 h-6" />
        </NavLink>
      </div>

      <img
        src={avatarPNG}
        alt="avatar"
        className="h-6 border border-white rounded-full md:h-8 lg:h-10 lg:mt-45"
      />
    </nav>
  );
}

export default Navbar;
