import { createSlice } from '@reduxjs/toolkit';

import courseItems from '../courseItems';

const initialState = {
  cartItems: courseItems,
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const { removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
