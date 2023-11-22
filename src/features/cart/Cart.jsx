import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="mt-10">
      <div>
        <CartItem />
        <CartItem />
      </div>
      <div className="flex flex-col items-end  gap-4">
        <p className="text-xl sm:text-3xl">$30.00</p>
        <button className=" rounded-lg bg-transparent px-2 py-1 text-xs outline outline-1 transition-all duration-300 ease-in-out hover:border-0 hover:bg-red sm:text-xl">
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Cart;
