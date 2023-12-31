import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";

function CartItem({ cartItem }) {
  const { id, name, imageUrl, ingredients, quantity, unitPrice, totalPrice } =
    cartItem;
  const dispatch = useDispatch();

  return (
    <div className="mb-5  border-b pb-5">
      <div className=" flex items-center justify-between gap-4 text-xs sm:gap-10 sm:text-sm xl:text-xl">
        <div className="grow-0">
          <img
            src={imageUrl}
            alt=""
            className="max-w-[3rem] rounded-md sm:max-w-[5rem]"
          />
        </div>
        <div className="grow ">
          <p>{name}</p>
          <p className="font-thin">{ingredients.join(", ")}</p>
        </div>
        <div className="flex grow-0 flex-col items-center justify-center gap-2 rounded-sm  bg-transparent font-thin sm:flex-row">
          <button
            onClick={() => dispatch(decreaseItemQuantity(id))}
            className="  w-8 "
          >
            -
          </button>
          <div>{quantity}</div>
          <button
            onClick={() => dispatch(increaseItemQuantity(id))}
            className=" w-8 "
          >
            +
          </button>
        </div>

        <div className="grow-0  font-thin">
          <button onClick={() => dispatch(deleteItem(id))}>REMOVE</button>
        </div>
        <div className="flex grow-0 justify-end text-xl font-thin sm:min-w-[5rem] sm:text-2xl lg:text-3xl">
          <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
