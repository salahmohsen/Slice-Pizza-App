import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

function AppLayout() {
  return (
    <div className="mx-10">
      <div className=" flex flex-col items-center justify-between sm:flex-row">
        <Logo />
        <Search />
      </div>
      <Outlet />
    </div>
  );
}

export default AppLayout;
