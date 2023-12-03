import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getCart = (state) => state.cart.cart;
export const isCurrentItemInCart = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ? true : false;

export const getItem = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id);

export const getTotoalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => item.quantity + sum, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => item.totalPrice + sum, 0);

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
