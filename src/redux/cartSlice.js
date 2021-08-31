import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [{'two': 2}],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.itemCart.push(action.payload);
    },
    remove: (state, action) => {
        state.itemCart = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer