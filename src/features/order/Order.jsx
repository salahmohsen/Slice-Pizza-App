import { IoTimeOutline } from "react-icons/io5";
import { useFetcher, useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";
import { getOrder } from "../../services/apiResturant";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher();
  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  return (
    <div className="my-10 flex  flex-col items-center justify-start border border-b-0 text-xs lg:text-lg">
      <div className=" flex w-full  items-center  border-b  ">
        <p className=" basis-1/2 border-r px-2 py-2 ">
          Order
          <span className=" mx-2 rounded-sm bg-yellow px-0.5 py-0">#{id}</span>
          Status
        </p>
        <div className="flex w-full items-center justify-center gap-1 font-thin">
          <div className="rounded-sm bg-blue-green px-2 py-0 ">Preparing</div>
          {priority && (
            <div className="rounded-sm bg-red px-2 py-0">Priority</div>
          )}
        </div>
      </div>
      <div className="  flex w-full items-center  border-b  ">
        <p className="basis-1/2 border-r px-2 py-2">Estimated Delivery Time</p>
        <p className="flex w-full grow justify-center gap-2 font-thin sm:gap-6">
          <span> {formatDate(estimatedDelivery)}</span>
          <span className="flex items-center ">
            <IoTimeOutline />
          </span>
          <span> Only {deliveryIn} minutes left</span>
        </p>
      </div>
      {cart.map((item) => {
        return (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher.data?.find((el) => el.id === item.pizzaId).ingredients
            }
          />
        );
      })}
      <div className="flex w-full border-b">
        <div className="flex w-full flex-col">
          <div className="flex h-full border-b px-2">
            <p className="flex grow-0 basis-1/3 items-center justify-center py-2">
              Pizza Price
            </p>
            <p className="flex grow items-center justify-center border-l text-lg font-thin lg:text-2xl">
              ${orderPrice}
            </p>
          </div>
          <div className="flex h-full border-b px-2">
            <p className="flex grow-0 basis-1/3 items-center justify-center py-2">
              Priority Price
            </p>
            <p className="flex grow items-center justify-center border-l text-lg font-thin lg:text-2xl">
              ${priorityPrice}
            </p>
          </div>
          <div className="flex h-full  px-2">
            <p className="flex grow-0 basis-1/3 items-center justify-center py-2">
              Total Price
            </p>
            <p className="flex grow items-center justify-center border-l text-lg font-bold lg:text-2xl">
              {formatCurrency(orderPrice + priorityPrice)}
            </p>
          </div>
        </div>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}

export async function loader({ params }) {
  const order = getOrder(params.orderId);
  return order;
}

export default Order;
