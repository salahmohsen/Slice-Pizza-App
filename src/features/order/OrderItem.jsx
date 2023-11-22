function OrderItem() {
  return (
    <div className="flex w-full gap-1 border-b ">
      <p className="flex items-center border-r px-4">1 </p>
      <div className="flex grow flex-col justify-center px-2 py-2 ">
        <p className="">
          <span>1×</span> Prosciutto e Rucola
        </p>
        <p className="font-thin">Tomato, Mozzarella, Prosciutto, Arugula</p>
      </div>
      <p className=" flex items-center border-l px-2 py-2 text-sm font-thin lg:text-2xl">
        €16.00
      </p>
    </div>
  );
}

export default OrderItem;
