function MenuItem({ available = true }) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center border transition-all duration-300 @container hover:saturate-0 sm:flex-row">
      <div className="h-[200px] w-full grow-0 sm:h-32 sm:w-[600px] sm:border-r">
        <img
          src="https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg"
          alt="Margherita"
          className={`h-full w-full object-cover ${
            available ? "saturate-100" : "saturate-0"
          }`}
        />
      </div>
      <div className="flex w-full grow  flex-col text-center sm:h-full sm:border-r">
        <div className="border-t py-2 sm:border-t-0">Margherita</div>
        <div className="border-t py-2">Tomato, Mozzarella, Basil</div>
        <div className="border-t py-2 text-xl font-thin">€12.00</div>
      </div>
      <div className="flex w-full grow-0  items-center justify-between border-t sm:h-full sm:w-96 sm:border-b ">
        <div className="h-full w-1/3 py-3 text-center sm:h-auto">-</div>
        <div className="h-full w-1/3 border-x py-3 text-center sm:h-auto">
          1
        </div>
        <div className="h-full w-1/3 py-3 text-center sm:h-auto">+</div>
      </div>
      <div className="w-full grow-0 border-t py-3 text-center sm:h-full sm:w-96 sm:border sm:border-r-0 ">
        <p className="h-full">Add To Cart</p>
      </div>
    </div>
  );
}

export default MenuItem;
