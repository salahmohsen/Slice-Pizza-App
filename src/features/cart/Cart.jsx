import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import { IoArrowBack } from "react-icons/io5";

function Cart() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  return (
    <div className="mt-10">
      {cart.length === 0 && (
        <Link
          to="/menu"
          className="mb-10 flex justify-center rounded-md border py-5 hover:bg-white hover:text-black"
        >
          Click here to add pizzas to your cart
        </Link>
      )}
      <div>
        {cart.map((cartItem) => {
          return <CartItem cartItem={cartItem} key={cartItem.pizzaId} />;
        })}
      </div>
      {cart.length > 0 && (
        <div className="flex justify-end  gap-2">
          <Link
            to={"/menu"}
            className="flex items-center gap-2 rounded-md bg-transparent px-2 py-1 text-xs  transition-all duration-300 ease-in-out hover:-translate-x-6    sm:text-xl"
          >
            <IoArrowBack /> Go back to menu
          </Link>

          <Link
            to={"/menu"}
            onClick={() => dispatch(clearCart())}
            className=" rounded-md bg-transparent px-2 py-1  text-xs transition-all duration-300 ease-in-out  hover:bg-white hover:text-black sm:text-xl"
          >
            Clear Cart
          </Link>
          <Link
            to={"../order/new"}
            className="animate-pulse rounded-md bg-transparent px-2 py-1 text-xs transition-all duration-300 ease-in-out  hover:bg-white hover:text-black sm:text-xl"
          >
            Order Pizza
          </Link>
          <p className="flex min-w-[5rem] justify-end text-xl sm:text-3xl">
            ${totalCartPrice}
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
