import { Link, useNavigate, useRouteError } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2 text-2xl">
      <h1 className="flex items-center gap-2">
        <span>
          <MdErrorOutline />
        </span>
        Something went wrong
      </h1>
      <p>{error.data || error.message}</p>
      <Link
        onClick={handleClick}
        className="flex items-center transition-all duration-300 ease-in-out hover:-translate-x-6"
      >
        <IoIosArrowBack />
        Go back
      </Link>
    </div>
  );
}

export default NotFound;
