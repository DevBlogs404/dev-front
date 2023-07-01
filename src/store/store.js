import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { totalPrice } from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

store.dispatch(totalPrice());

export default store;
