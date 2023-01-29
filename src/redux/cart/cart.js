import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // add item to cart. it should add a new item to the cart else increment the quantity of the item if already in the cart
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      //completely remove an item from the cart
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
    },
    decrementItem: (state, action) => {
      state.cartItems.forEach((item, index) => {
        if (item._id === action.payload && state.cartItems[index].qty > 1) {
          return (state.cartItems[index].qty -= 1);
        }
        if (item._id === action.payload) {
          state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
        }
      });
    },
    incrementItem: (state, action) => {
      state.cartItems.forEach((item, index) => {
        if (item._id === action.payload) {
          return (state.cartItems[index].qty += 1);
        }
      });
    },
    //Orders
    addOrder: (state, action) => {
      // add orders to the dashboard

    },
    removeOrder: (state, action) => {
      //remove the completed orders from the dashboard
    },
  },
});

export const getSubtotal = (state) => {
  const cartItems = state.cart.cartItems;
  return cartItems.reduce((acc, item) => {
    return (acc += item.price * item.qty);
  }, 0);
};

export const { addItem, removeItem, decrementItem, incrementItem } = CartSlice.actions;

export default CartSlice.reducer;
