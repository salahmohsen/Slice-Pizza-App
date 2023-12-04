import { Link, useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <Link
        to=".."
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        &larr; Go back
      </Link>
    </div>
  );
}

export default NotFound;
