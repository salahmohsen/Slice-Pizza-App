import { HiOutlineSearch } from "react-icons/hi";

function Search() {
  return (
    <div>
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm  text-white  hover:text-gray-400  ">
          <HiOutlineSearch />
        </span>
        <input
          type="text"
          placeholder={"Search For Order..."}
          id="search"
          className="w-1 rounded-full bg-red py-2 pl-12 font-logo text-sm uppercase text-white outline-0 duration-500  ease-in-out placeholder:capitalize placeholder:italic hover:w-72 hover:bg-bg-input hover:pl-11 hover:pr-5 focus:w-72 focus:bg-bg-input focus:pl-11 focus:pr-5 "
        />
      </label>
    </div>
  );
}

export default Search;
