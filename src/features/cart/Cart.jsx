import CartItem from "./CartItem";

function Cart() {
  return (
    <>
      <div>
        <CartItem />
        <CartItem />
      </div>
      <div className="flex items-center justify-end gap-4">
        <p className="text-xl sm:text-3xl">$30.00</p>
        <button className=" bg-red px-2 py-1 text-xs sm:text-2xl">
          Check Out
        </button>
      </div>
    </>
  );
}

export default Cart;
