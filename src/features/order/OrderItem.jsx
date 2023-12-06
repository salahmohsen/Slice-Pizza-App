function OrderItem({ item, isLoadingIngredients, ingredients }) {
  console.log(item);
  const { pizzaId, name, quantity, unitPrice, totalPrice } = item;
  return (
    <div className="flex w-full gap-1 border-b ">
      <p className="flex items-center border-r px-4">{quantity} </p>
      <div className="flex grow flex-col justify-center px-2 py-2 ">
        <p className="">{name}</p>
        <p className="font-thin">
          {isLoadingIngredients ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            ingredients?.join(", ")
          )}
        </p>
      </div>
      <p className=" flex items-center border-l px-2 py-2 text-sm font-thin lg:text-2xl">
        €{totalPrice}
      </p>
    </div>
  );
}

export default OrderItem;
