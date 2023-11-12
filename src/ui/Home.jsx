function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex items-center justify-center">
        <p>The Best Pizza For </p>
        <form>
          <input
            type="text"
            placeholder={"Your Name?"}
            id="search"
            className="bg-red hover:bg-bg-input text-white rounded-full hover:pr-5  py-2 text-sm uppercase placeholder:italic pl-12  outline-0 placeholder:capitalize font-logo w-20 hover:w-72 ease-in-out duration-500 "
          />
          <button className="bg-red ">Start Ordering</button>
        </form>
      </div>
      <p>Straight out of the oven, straight to you.</p>
    </div>
  );
}

export default Home;
