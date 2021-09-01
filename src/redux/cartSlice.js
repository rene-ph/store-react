import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.cart.push(action.payload);
    },
    remove: (state, action) => {
        state.cart = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer