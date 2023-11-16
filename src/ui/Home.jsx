import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [userName, setUserName] = useState("");

  return (
    <>
      <div className="flex h-[80dvh] flex-col items-center justify-center gap-2 text-center text-xs sm:text-lg md:text-xl lg:text-5xl ">
        <div className="flex items-center justify-center gap-1 sm:gap-1">
          <p className=" text-red ">The Best Pizza For You,</p>
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ width: `${userName.length}ch` }}
            className={`m-auto min-w-[5rem] max-w-[10rem]  rounded-md bg-bg-input px-2 py-1 text-center capitalize text-yellow outline-none placeholder:text-center placeholder:font-thin sm:min-w-[11rem] sm:max-w-[15rem] lg:min-w-[13rem]`}
          />
        </div>
        <div className="font-thin">
          Straight out of the oven, straight to you.
        </div>
        <Link
          to={"/menu"}
          type="submit"
          form="StartOrdering"
          className="mt-5 flex items-center justify-center overflow-hidden rounded-full border border-red bg-transparent px-4 py-2 font-thin  transition-all duration-700 ease-in-out hover:bg-red md:text-2xl lg:mt-10 lg:px-10 lg:text-3xl xl:py-4"
        >
          Start Ordering
        </Link>
      </div>
    </>
  );
}

export default Home;
