import { Link } from "react-router-dom";

function CreateOrder() {
  return (
    <div className="my-10 flex w-full flex-col gap-5 text-sm ">
      <p className="sm:font- flex justify-center font-logo text-lg">
        Ready To Order? Let&#39;s Go
      </p>
      <div className="flex flex-col gap-2 ">
        <p className="grow-0">First Name</p>
        <input
          type="text"
          className=" h-7 grow  rounded-md bg-bg-input px-3   focus:shadow-sm focus:shadow-yellow/30 focus:outline-0"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="grow-0 ">Phone Number</p>
        <input
          type="text"
          className=" h-7 grow rounded-md bg-bg-input px-3 focus:shadow-sm focus:shadow-yellow/30 focus:outline-0"
        />
      </div>
      <div className="relative flex flex-col gap-2">
        <p className="grow-0 ">Address</p>
        <input
          type="text"
          className=" h-7 grow rounded-md bg-bg-input px-3 capitalize   focus:shadow-sm focus:shadow-yellow/30 focus:outline-0"
        />
        <button className="absolute bottom-[3px] right-2 z-10 rounded-md border bg-bg-input px-2  py-0.5 text-xs capitalize">
          Get Directions
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" className="h-4 w-4" />
        <p>Want to yo give your order priority?</p>
      </div>
      <div className="flex justify-end">
        <Link to={"../order/test"} className="rounded-md border px-2 py-1">
          Check Out
        </Link>
      </div>
    </div>
  );
}

export default CreateOrder;
