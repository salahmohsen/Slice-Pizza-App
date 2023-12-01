import { useState } from "react";
import CreateUser from "../features/user/CreateUser";
import StartOrdering from "../features/user/StartOrdering";

function Home() {
  const [username, setUserName] = useState("");

  return (
    <>
      <div className=" flex h-[80dvh] flex-col items-center justify-center gap-2 text-center sm:text-base md:text-4xl lg:text-4xl xl:text-5xl  ">
        <div className="flex items-center justify-center gap-1 sm:gap-1">
          <p className=" text-red ">The Best Pizza For You,</p>
          <CreateUser username={username} setUserName={setUserName} />
        </div>
        <div className="sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl ">
          Straight out of the oven, straight to you.
        </div>
        <StartOrdering username={username} setUserName={setUserName} />
      </div>
    </>
  );
}

export default Home;
