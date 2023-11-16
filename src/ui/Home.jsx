import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [userName, setUserName] = useState("");

  return (
    <>
      <div className="flex h-[80dvh] flex-col items-center justify-center gap-5 text-center text-2xl sm:text-3xl lg:text-4xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-1">
          <p className=" text-red ">The Best Pizza For You,</p>
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ width: `${userName.length}ch` }}
            className={`m-auto min-w-[9rem] max-w-[16rem]  rounded-md bg-bg-input px-2 py-1 text-center capitalize text-yellow outline-none placeholder:text-center placeholder:font-thin sm:min-w-[11rem] sm:max-w-[15rem] lg:min-w-[13rem]`}
          />
        </div>
        <div className="font-thin">
          Straight out of the oven, straight to you.
        </div>
        <Link
          to={"/menu"}
          type="submit"
          form="StartOrdering"
          className="flex w-1/3 items-center  justify-center overflow-hidden rounded-full border border-red bg-transparent px-6 py-3 text-base transition-all duration-700 ease-in-out  hover:bg-red sm:text-2xl"
        >
          Start Ordering
        </Link>
      </div>
    </>
    // <div className="@container/main m-auto flex h-[70dvh] w-1/3 flex-col items-center justify-center gap-5 text-2xl	">
    //   <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
    //     <p className=" text-center text-3xl text-red lg:text-4xl">
    //       The Best Pizza For
    //     </p>
    //     <div className="flex flex-col flex-wrap items-center justify-center sm:flex-row">
    //       <form className="flex items-center justify-center gap-2 text-sm sm:text-lg">
    //         <input
    //           type="text"
    //           placeholder={"Your Name?"}
    //           id="search"
    //           className=" rounded-md bg-bg-input px-2  py-2  text-center font-logo uppercase  text-white outline-0 placeholder:capitalize placeholder:italic  "
    //         />
    //         <button className="h-full rounded-md bg-red px-3 py-2 font-logo ">
    //           Start Ordering
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    //   <p className=" @lg/main:text-5xl w-full text-center font-thin">
    //     Straight out of the oven, straight to you.
    //   </p>
    // </div>
  );
}

export default Home;
