import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

function AppLayout() {
  return (
    <div className="m-auto w-5/6">
      <div className=" flex flex-col items-center justify-between sm:flex-row">
        <Logo />
        <Search />
      </div>
      <Outlet />
    </div>
  );
}

export default AppLayout;
