import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";

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
          return <CartItem cartItem={cartItem} key={cartItem.id} />;
        })}
      </div>
      {cart.length > 0 && (
        <div className="flex justify-end  gap-2">
          <Link
            to={"../order/new"}
            className="rounded-md bg-transparent px-2 py-1  text-xs transition-all duration-300 ease-in-out hover:border-0 hover:bg-white hover:text-black sm:text-xl"
          >
            Order Pizza
          </Link>

          <button
            onClick={() => dispatch(clearCart())}
            className=" rounded-md bg-transparent px-2 py-1  text-xs transition-all duration-300 ease-in-out hover:border-0 hover:bg-white hover:text-black sm:text-xl"
          >
            Clear Cart
          </button>

          <p className="text-xl sm:text-3xl">${totalCartPrice}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
