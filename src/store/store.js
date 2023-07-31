import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { totalPrice } from "./cartSlice";
import productReducer from "./productSlice";
import wishListReducer from './wishListSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    wishList:wishListReducer
  },
});

store.dispatch(totalPrice());

export default store;
