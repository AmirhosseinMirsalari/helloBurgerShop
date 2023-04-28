import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getStorage, saveStorage } from "lib/helper";

const initialState = {
  cart: getStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [
        ...state.cart,
        { ...action.payload.product, qty: action.payload.qty },
      ];
      saveStorage(state.cart)
      toast.success("محصول انتخابی، به سبد خرید اضافه شد");
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload.id);
      saveStorage(state.cart)
    },
    increment: (state, action) => {
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty + 1 } : p
      );
      saveStorage(state.cart)
    },
    decrement: (state, action) => {
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty - 1 } : p
      );
      saveStorage(state.cart)

    },
    clearCart: (state, action) => {
      state.cart = [];
      saveStorage(state.cart)
    },
    
  },
});

export const { addToCart, removeFromCart, increment, decrement, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
