import { useSelector } from "react-redux";
import { getUser } from "./userSlice";

function User() {
  const username = useSelector(getUser);
  if (!username) return null;

  return <p className="text-xl capitalize ">Hello, {username}</p>;
}

export default User;
