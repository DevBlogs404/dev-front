import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartTotalDiscount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // for adding elements to the cart
    addItemToCart(state, action) {
      // to avoid adding of a same product in the cart instead increasing it's quantity in cart
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        // for quantity of a particular item in cart
        const newProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // for removing an element from the cart
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // for incrementing the item quantity available in the cart
    incrementItemQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // for decrementing the item quantity available in the cart
    decrementItemQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        const cartQuantity = state.cartItems[itemIndex].cartQuantity;

        if (cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // removing all items from the cart
    clear(state, action) {
      state.cartItems = [];
    },

    // miscelenous values used for cart
    totalPrice(state, action) {
      let { total, quantity, totaldiscount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity, discount } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          cartTotal.totaldiscount += discount;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
          totaldiscount: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      state.cartTotalDiscount = totaldiscount;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  totalPrice,
  clear,
} = cartSlice.actions;
export default cartSlice.reducer;
