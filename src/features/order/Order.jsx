import OrderItem from "./OrderItem";

function Order() {
  return (
    <div className="my-10 flex  flex-col items-center justify-start border border-b-0 text-xs lg:text-lg">
      <div className=" flex w-full  items-center  border-b  ">
        <p className=" basis-1/2 border-r px-2 py-2 ">
          Order
          <span className=" mx-2 rounded-sm bg-yellow px-0.5 py-0">
            #DGDFGG
          </span>
          Status
        </p>
        <div className="flex w-full items-center justify-center gap-1">
          <div className="rounded-sm bg-blue-green px-2 py-0 ">
            Preparing Order
          </div>
          <div className="rounded-sm bg-red px-2 py-0">Priority</div>
        </div>
      </div>
      <div className="  flex w-full items-center  border-b  ">
        <p className="basis-1/2 border-r px-2 py-2">
          Estimated Delivery To Arrive
        </p>
        <p className="flex w-full grow justify-center ">3H:28M:32S</p>
      </div>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <div className="flex w-full border-b">
        <div className="flex w-full flex-col">
          <div className="flex h-full border-b px-2">
            <p className="flex grow-0 basis-1/3 items-center justify-center py-2">
              Pizza Price
            </p>
            <p className="flex grow items-center justify-center border-l text-lg font-thin lg:text-2xl">
              $128
            </p>
          </div>
          <div className="flex h-full border-b px-2">
            <p className="flex grow-0 basis-1/3 items-center justify-center py-2">
              Priority Price
            </p>
            <p className="flex grow items-center justify-center border-l text-lg font-thin lg:text-2xl">
              $6
            </p>
          </div>
          <div className="flex h-full  px-2">
            <p className="flex grow-0 basis-1/3 items-center justify-center py-2">
              Total Price
            </p>
            <p className="flex grow items-center justify-center border-l text-lg font-bold lg:text-2xl">
              $134
            </p>
          </div>
        </div>
      </div>
      <button className="w-full border-b py-2 transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
        Make Priority
      </button>
    </div>
  );
}

export default Order;
