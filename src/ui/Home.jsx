function Home() {
  return (
    <>
      <div className="flex h-[80dvh] flex-col items-center justify-center gap-3 text-center text-2xl sm:text-3xl lg:text-4xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-1">
          <p className=" text-red ">The Best Pizza For You,</p>
          <form id="StartOrdering">
            <input
              type="text"
              placeholder="Your Name"
              className="w-auto max-w-[11rem] rounded-md bg-bg-input px-2 text-center capitalize text-yellow outline-none placeholder:text-center sm:max-w-[15rem]"
            />
          </form>
        </div>
        <div className="">Straight out of the oven, straight to you.</div>
        <button
          type="submit"
          form="StartOrdering"
          className="mt-5 w-1/2 overflow-hidden rounded-full border border-red bg-transparent px-6 py-3  text-base transition-all duration-700 ease-out  hover:bg-red sm:text-2xl"
        >
          Start Ordering
        </button>
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
