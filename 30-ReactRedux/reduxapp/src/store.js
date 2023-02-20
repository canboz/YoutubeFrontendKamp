import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './control/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
