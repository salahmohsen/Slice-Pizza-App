import { Link, Outlet, useNavigation } from "react-router-dom";
import Search from "./Search";
import Loader from "./Loader";
import User from "../features/user/User";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      {isLoading && <Loader />}
      <div className="m-auto w-5/6">
        <div className=" flex flex-col items-center justify-between sm:flex-row">
          <Link to={"/"} className="w-sm">
            <img src="/public/assets/logo.svg" alt="SLICE" />
          </Link>
          <div className="flex items-center justify-center gap-5">
            <User />
            <Search />
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
