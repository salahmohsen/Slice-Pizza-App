import { useSelector } from "react-redux";

function User() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;

  return <p className="text-xl capitalize ">Hello, {username}</p>;
}

export default User;
