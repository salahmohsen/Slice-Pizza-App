import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { fetchAddress } from "../user/userSlice";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { createOrder } from "../../services/apiResturant";
import store from "../../store";
import { CiWarning } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const formErrors = useActionData();
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: addressError,
  } = useSelector((state) => state.user);

  const totalPrice = useSelector(getTotalCartPrice);
  const priortyPrice = withPriority ? totalPrice * 0.2 : 0;
  const isAdressLoading = addressStatus === "loading";
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="my-10 flex w-full flex-col gap-5 text-sm ">
      <p className="sm:font- flex justify-center font-logo text-lg">
        Ready To Order? Let&#39;s Go
      </p>
      <Form method="POST" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center  ">
          <label className="min-w-[10rem] grow-0">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className=" h-7 grow  rounded-md bg-bg-input px-3   focus:shadow-sm focus:shadow-yellow/30 focus:outline-0"
          />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="min-w-[10rem] grow-0 ">Phone Number</label>
          <div className="flex w-full flex-col items-center justify-center sm:flex-row">
            <input
              type="tel"
              name="phone"
              defaultValue="+20"
              required
              className="h-7 w-full grow rounded-md bg-bg-input px-3 focus:shadow-sm focus:shadow-yellow/30 focus:outline-0"
            />
            {formErrors?.phone && (
              <p className="bg-red-100 text-red-700 mt-2 flex items-center rounded-full p-2 text-center text-xs">
                <span className="text-2xl">
                  <CiWarning />
                </span>
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>
        <div className="relative z-0 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="min-w-[10rem] grow-0">Address</label>
          <input
            type="text"
            name="address"
            defaultValue={address}
            required
            className=" h-7 grow rounded-md bg-bg-input px-3 capitalize focus:shadow-sm focus:shadow-yellow/30 focus:outline-0"
          />
          <button
            className="absolute bottom-[3px] right-2 z-10 bg-bg-input px-2 py-0.5  text-xs capitalize disabled:animate-bounce disabled:cursor-not-allowed"
            disabled={isAdressLoading}
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchAddress());
            }}
          >
            Get Address
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-4 w-4"
          />
          <label>Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="position"
          value={
            position.longitude && position.latitude
              ? `${position.latitude}, ${position.longitude}`
              : ""
          }
        />
        <div className="flex justify-end">
          <button
            disabled={isSubmitting || isAdressLoading}
            className=" rounded-md px-2 py-1 text-lg hover:bg-white hover:text-black disabled:animate-pulse"
          >
            {isSubmitting ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              `Order Now For ${formatCurrency(totalPrice + priortyPrice)}$`
            )}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "please  give us a correct phone number to be able to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
