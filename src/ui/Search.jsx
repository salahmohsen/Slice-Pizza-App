import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm  text-white  hover:text-gray-400  ">
            <HiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder={"Search For Order..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="search"
            className="w-1 rounded-full bg-red py-2 pl-12 font-logo text-sm uppercase text-white outline-0 duration-500  ease-in-out placeholder:capitalize placeholder:italic hover:w-72 hover:bg-bg-input hover:pl-11 hover:pr-5 focus:w-72 focus:bg-bg-input focus:pl-11 focus:pr-5 "
          />
        </label>
      </form>
    </div>
  );
}

export default Search;
