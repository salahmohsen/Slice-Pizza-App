import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  getItem,
  increaseItemQuantity,
  isCurrentItemInCart,
} from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, imageUrl, ingredients, soldOut, unitPrice } = pizza;
  const dispatch = useDispatch();
  const inCart = useSelector(isCurrentItemInCart(id));
  const itemQuantity = useSelector(getItem(id))?.quantity;

  function handleAddItem() {
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      ingredients: [...ingredients],
      imageUrl,
    };

    dispatch(addItem(newItem));
  }

  return (
    <div className="mt-3 flex flex-col items-center justify-center border transition-all duration-300 @container sm:flex-row">
      <div className=" flex h-36 w-full grow-0 items-center justify-center overflow-hidden   sm:w-96 sm:max-w-lg sm:border-r ">
        <img
          src={imageUrl}
          alt={name}
          className={`w-full object-cover  sm:h-36 ${
            soldOut ? "saturate-0" : "saturate-100"
          }`}
        />
      </div>
      <div className="flex w-full grow  flex-col text-center sm:h-36 sm:border-r">
        <div className="border-t py-2 sm:border-t-0">{name}</div>
        <div className="border-t py-2 font-thin">{ingredients.join(", ")}</div>
        <div className="border-t py-2 text-xl font-thin">€{unitPrice}</div>
      </div>
      {inCart && (
        <div className="flex w-full grow-0  items-center justify-between border-t sm:h-36 sm:w-96 sm:border-b ">
          <button
            disabled={soldOut}
            onClick={() => dispatch(decreaseItemQuantity(id))}
            className="h-full w-1/3 py-3 text-center hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white	 sm:h-36"
          >
            -
          </button>
          <p className="flex h-full w-1/3 items-center justify-center border-x py-3 text-center sm:h-36">
            {itemQuantity}
          </p>
          <button
            disabled={soldOut}
            onClick={() => dispatch(increaseItemQuantity(id))}
            className="h-full w-1/3 py-3 text-center hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white	 sm:h-36"
          >
            +
          </button>
        </div>
      )}
      {!inCart && (
        <button
          onClick={handleAddItem}
          disabled={soldOut}
          className="h-full w-full grow-0 border-t py-3 text-center hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white	 sm:h-36  sm:w-96 sm:border-0 "
        >
          {soldOut ? "Sold Out" : "Add To Cart"}
        </button>
      )}
    </div>
  );
}

export default MenuItem;
