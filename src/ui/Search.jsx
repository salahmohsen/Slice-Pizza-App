import { HiOutlineSearch } from "react-icons/hi";

function Search() {
  return (
    <div>
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 hover:text-gray-400  text-white  text-sm  ">
          <HiOutlineSearch />
        </span>
        <input
          type="text"
          placeholder={"Hello, Salah - Search For Order"}
          id="search"
          className="bg-red hover:bg-bg-input text-white rounded-full hover:pr-5 hover:pl-11 py-2 text-sm uppercase placeholder:italic pl-12  outline-0 placeholder:capitalize font-logo w-1 hover:w-72 ease-in-out duration-500 "
        />
      </label>
    </div>
  );
}

export default Search;
