import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: []
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
      toast.success("محصول با موفقیت اضافه شد");
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload.id);
    },
    increment: (state, action) => {
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty + 1 } : p
      );
    },
    decrement: (state, action) => {
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty - 1 } : p
      );
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
    
  },
});

export const { addToCart, removeFromCart, increment, decrement, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
