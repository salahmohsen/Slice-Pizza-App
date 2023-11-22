function CartItem() {
  return (
    <div className="mb-5 border-b pb-5">
      <div className=" flex items-center justify-center gap-4 text-xs sm:gap-10 sm:text-sm xl:text-xl">
        <div className="flex grow-0 items-center justify-between gap-2 rounded-lg bg-transparent px-2 py-1 font-thin outline outline-1 sm:gap-4 sm:px-4">
          <div>-</div>
          <div>1</div>
          <div>+</div>
        </div>
        <div className="grow-0">
          <img
            src="https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg"
            alt=""
            className="max-w-[3rem] rounded-full sm:max-w-[5rem]"
          />
        </div>
        <div className="grow">
          <p>Capricciosa</p>
          <p className="font-thin">
            Tomato, Mozzarella, Ham, Mushrooms, Artichoke
          </p>
        </div>
        <div className="grow-0 font-thin">
          <button>REMOVE</button>
        </div>
        <div className="grow-0 text-xl font-thin sm:text-2xl lg:text-3xl">
          <p>$15.00</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
