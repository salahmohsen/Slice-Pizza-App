import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";

function StartOrdering({ username }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleStartOrdering(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  if (username)
    return (
      <button
        type="submit"
        form="StartOrdering"
        className="mt-5 flex items-center justify-center overflow-hidden rounded-full border border-red bg-transparent px-4 py-2 font-thin  transition-all duration-700 ease-in-out hover:bg-red  lg:mt-10 lg:px-10 lg:text-3xl xl:py-4"
        onClick={handleStartOrdering}
      >
        Start Ordering
      </button>
    );
}

export default StartOrdering;
