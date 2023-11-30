import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateName } from "../features/user/userSlice";

function Home() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleStartOrdering(e) {
    e.preventDefault();
    if (!userName) return;
    dispatch(updateName(userName));
    navigate("/menu");
  }
  const username = useSelector((state) => state.user.username);

  console.log(username);
  return (
    <>
      <div className=" flex h-[80dvh] flex-col items-center justify-center gap-2 text-center sm:text-base md:text-4xl lg:text-4xl xl:text-5xl  ">
        <div className="flex items-center justify-center gap-1 sm:gap-1">
          <p className=" text-red ">The Best Pizza For You,</p>
          <input
            type="text"
            placeholder={username ? `${username}` : "Your Name"}
            value={userName}
            form="StartOrdering"
            autoComplete="cc-name"
            onChange={(e) => setUserName(e.target.value)}
            style={{ width: `${userName.length}ch` }}
            className={`m-auto min-w-[5rem] max-w-[10rem]  rounded-md bg-bg-input px-2 py-1 text-center capitalize text-yellow outline-none placeholder:text-center placeholder:font-thin sm:min-w-[11rem] sm:max-w-[15rem] lg:min-w-[20rem]`}
          />
        </div>
        <div className="sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl ">
          Straight out of the oven, straight to you.
        </div>
        {userName && (
          <button
            type="submit"
            form="StartOrdering"
            className="mt-5 flex items-center justify-center overflow-hidden rounded-full border border-red bg-transparent px-4 py-2 font-thin  transition-all duration-700 ease-in-out hover:bg-red  lg:mt-10 lg:px-10 lg:text-3xl xl:py-4"
            onClick={handleStartOrdering}
          >
            Start Ordering
          </button>
        )}
      </div>
    </>
  );
}

export default Home;
