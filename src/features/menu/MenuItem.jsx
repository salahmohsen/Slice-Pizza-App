function MenuItem({ pizza }) {
  console.log(pizza);
  const { id, name, imageUrl, ingredients, soldOut, unitPrice } = pizza;
  return (
    <div className="mt-3 flex flex-col items-center justify-center border transition-all duration-300 @container sm:flex-row">
      <div className=" flex h-32 w-full grow-0 items-center justify-center overflow-hidden  sm:w-96 sm:max-w-lg sm:border-r md:h-auto">
        <img
          src={imageUrl}
          alt={name}
          className={`w-full object-cover  sm:h-[150px]    ${
            soldOut ? "saturate-0" : "saturate-100"
          }`}
        />
      </div>
      <div className="flex w-full grow  flex-col text-center sm:h-full sm:border-r">
        <div className="border-t py-2 sm:border-t-0">{name}</div>
        <div className="border-t py-2 font-thin">{ingredients.join(", ")}</div>
        <div className="border-t py-2 text-xl font-thin">€{unitPrice}</div>
      </div>
      <div className="flex w-full grow-0  items-center justify-between border-t sm:h-full sm:w-96 sm:border-b ">
        <button className="h-full w-1/3 py-3 text-center hover:bg-white hover:text-black sm:h-auto">
          -
        </button>
        <p className="h-full w-1/3 border-x py-3 text-center sm:h-auto ">1</p>
        <button className="h-full w-1/3 py-3 text-center hover:bg-white hover:text-black sm:h-auto">
          +
        </button>
      </div>
      <button className="w-full grow-0 border-t py-3 text-center hover:bg-white hover:text-black sm:h-full sm:w-96 sm:border sm:border-r-0 ">
        <span className="h-full ">Add To Cart</span>
      </button>
    </div>
  );
}

export default MenuItem;
