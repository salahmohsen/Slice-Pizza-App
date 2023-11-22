import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="mt-10">
      <div>
        <CartItem />
        <CartItem />
      </div>
      <div className="flex justify-end  gap-2">
        <Link
          to={"../order/new"}
          className=" rounded-lg bg-transparent px-2 py-1 text-xs outline outline-1 transition-all duration-300 ease-in-out hover:border-0 hover:bg-red sm:text-xl"
        >
          Order Pizza
        </Link>

        <button className=" rounded-lg bg-transparent px-2 py-1 text-xs outline outline-1 transition-all duration-300 ease-in-out hover:border-0 hover:bg-red sm:text-xl">
          Clear Cart
        </button>

        <p className="text-xl sm:text-3xl">$30.00</p>
      </div>
    </div>
  );
}

export default Cart;
