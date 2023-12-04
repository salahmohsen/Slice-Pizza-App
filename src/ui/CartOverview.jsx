import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlinePound } from "react-icons/ai";
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
      <div className="fixed bottom-4 left-0 h-11 w-screen border-t-2 border-black bg-blue-green font-logo text-2xl "></div>
      <div className="fixed bottom-2 left-0 h-11 w-screen border-t-2 border-black bg-red font-logo text-2xl "></div>
      <div className="fixed bottom-0 left-0 h-11 w-screen border-t-2 border-black bg-yellow text-gray-700">
        <div className="m-auto flex h-full w-5/6 items-center justify-between">
          <p className="flex h-full items-center  font-bold">
            <span className="flex pl-2">
              {[...Array(totoalCartQuantity <= 8 ? totoalCartQuantity : 8)].map(
                (_, index) => (
                  <GiFullPizza key={index} />
                ),
              )}
            </span>
            {totalCartPrice > 0 && (
              <span className=" ">
                <AiOutlinePound />
              </span>
            )}

            <span className="pl-1">{totalCartPrice ? totalCartPrice : ""}</span>
          </p>
          {totoalCartQuantity > 0 ? (
            <Link to={"/cart"}>
              <p className="flex h-full animate-bounce items-center">
                Open Cart
                <span className="pl-2">
                  <HiOutlineShoppingCart className="" />
                </span>
              </p>
            </Link>
          ) : (
            <p className="flex h-full animate-pulse items-center">
              Add Items To Open The Cart
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
