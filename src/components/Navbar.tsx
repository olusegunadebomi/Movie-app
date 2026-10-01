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
    <nav className="fixed top-0 left-0 z-10 w-full h-14 flex justify-between items-center px-4 bg-gray-900 sm:px-6 md:static md:h-18 md:mx-0 md:my-6 md:px-6 md:rounded-lg lg:fixed lg:left-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-24 lg:h-screen lg:flex-col lg:py-9 lg:px-0">
      {/* <img src={LogoSVG} alt="logo" className="scale-75 md:scale-100" /> */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `Navbar ${isActive ? "Navbar-active" : ""}`
        }
      >
        <img src={LogoSVG} alt="logo" className="w-8 md:w-auto" />
      </NavLink>

      <div className="flex gap-5 sm:gap-7 md:gap-8 lg:flex-col lg:gap-10">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `Navbar flex flex-col items-center gap-1 text-center text-[10px] leading-none hover:text-white ${isActive ? "Navbar-active text-white" : "text-white/65"}`
          }
        >
          <img src={NavHomeSVG} alt="" className="w-6 h-6" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `Navbar flex flex-col items-center gap-1 text-center text-[10px] leading-none hover:text-white ${isActive ? "Navbar-active text-white" : "text-white/65"}`
          }
        >
          <img src={NavMoviesSVG} alt="" className="w-6 h-6" />
          <span>Movies</span>
        </NavLink>

        <NavLink
          to="/series"
          className={({ isActive }) =>
            `Navbar flex flex-col items-center gap-1 text-center text-[10px] leading-none hover:text-white ${isActive ? "Navbar-active text-white" : "text-white/65"}`
          }
        >
          <img src={NavSeriesSVG} alt="" className="w-6 h-6" />
          <span>Series</span>
        </NavLink>

        <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            `Navbar flex flex-col items-center gap-1 text-center text-[10px] leading-none hover:text-white ${isActive ? "Navbar-active text-white" : "text-white/65"}`
          }
        >
          <img src={NavBookmarksSVG} alt="" className="w-6 h-6" />
          <span>Bookmarks</span>
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
