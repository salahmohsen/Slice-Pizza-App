import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiCurrencyPound } from "react-icons/hi2";
import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getTotalCartPrice,
  getTotoalCartQuantity,
} from "../features/cart/cartSlice";

function CartOverview() {
  const totoalCartQuantity = useSelector(getTotoalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <>
      <div className="fixed bottom-4 left-0 h-10 w-screen border-t-2 border-black bg-blue-green font-logo text-2xl "></div>
      <div className="fixed bottom-2 left-0 h-10 w-screen border-t-2 border-black bg-red font-logo text-2xl "></div>
      <div className="fixed bottom-0 left-0 h-10 w-screen border-t-2 border-black bg-yellow text-gray-700">
        <div className="m-auto flex h-full w-5/6 items-center justify-between">
          <p className="flex h-full items-center  font-bold">
            {totoalCartQuantity}x
            <span className="pl-2">
              <GiFullPizza />
            </span>
            <span className="pl-1 ">{totalCartPrice}</span>
            <span className="pl-1 ">
              <HiCurrencyPound />
            </span>
          </p>
          {totoalCartQuantity > 0 ? (
            <Link to={"/cart"}>
              <p className="flex h-full items-center">
                Open Cart
                <span className="pl-2">
                  <HiOutlineShoppingCart />
                </span>
              </p>
            </Link>
          ) : (
            <p className="flex h-full items-center">
              Add items to open cart
              <span className="pl-2">
                <HiOutlineShoppingCart />
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default CartOverview;
