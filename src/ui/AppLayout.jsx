import { Link, Outlet, useNavigation } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      {isLoading && <Loader />}
      <div className="m-auto w-5/6">
        <div className=" flex flex-col items-center justify-between sm:flex-row">
          <Link to={"/"}>
            <Logo />
          </Link>
          <Search />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
