import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// thunk (basically a funtion that returns another function(usually async since we can't make async calls directly in redux))

export const fetchProducts = () => {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      let data = await fetch("https://dev-back.vercel.app/api/products/get-products");
      data = await data.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

export const fetchProductsByCategory = (category) => {
  return async function fetchProductsByCategoryThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      let data = await fetch(
        `https://dev-back.vercel.app/api/products/get-products-by-category?category=${category}`
      );
      data = await data.json();

      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
