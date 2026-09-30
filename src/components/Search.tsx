// import { use, useEffect } from "react";
import searchIcon from "../assets/icon-search.svg";
import { useData } from "../context/cont";

function Search({ placeholder }: { placeholder: string }) {
  const { query, setQuery } = useData();

  return (
    <div className="relative flex items-center mb-6 lg:mb-8">
      <div className="flex items-center w-full">
        <img
          src={searchIcon}
          alt="search icon"
          className="w-4 h-4 mr-3 scale-75 md:scale-100"
        />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          maxLength={35}
          className="h-10 min-w-0 flex-1 bg-dark-bg border-none px-1 font-light text-sm text-white placeholder-white placeholder-opacity-50 focus:outline-none sm:text-base md:h-8 md:text-2xl lg:h-8"
        />
      </div>
    </div>
  );
}

export default Search;
