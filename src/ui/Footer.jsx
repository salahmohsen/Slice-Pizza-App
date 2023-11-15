import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiFullPizza } from "react-icons/gi";
import { PiMoneyThin } from "react-icons/pi";

function Footer() {
  return (
    <>
      <div className="fixed bottom-4 left-0 h-10 w-screen border-t-2 border-black bg-blue-green font-logo text-2xl "></div>
      <div className="fixed bottom-2 left-0 h-10 w-screen border-t-2 border-black bg-red font-logo text-2xl "></div>
      <div className="fixed bottom-0 left-0 h-10 w-screen border-t-2 border-black bg-yellow text-gray-700">
        <div className="m-auto flex h-full w-5/6 items-center justify-between">
          <p className="flex h-full items-center  font-bold">
            2x
            <span className="pl-2">
              <GiFullPizza />
            </span>
            <span className="pl-1 ">12$</span>
          </p>
          <p className="flex h-full items-center">
            Open Cart
            <span className="pl-2">
              <HiOutlineShoppingCart />
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
