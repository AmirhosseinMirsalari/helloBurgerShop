import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/shoppingCart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
