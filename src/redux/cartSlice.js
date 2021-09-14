import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.cart.length > 0) {  
        // Finds the same cart and adds to the array the new quantity and price
        if (state.cart.find(item => item.id === action.payload.id)) {
             const index = state.cart.findIndex((item) => item.id === action.payload.id);
             state.cart[index].price += action.payload.price;
             state.cart[index].quantity += 1;
        } else {
          state.cart.push(action.payload);
        }
      } else {
        state.cart.push(action.payload);
      }
    },
    updateCartById: (state, action) => {
      //Expected payload {{id, prop, value}}
      if (state.cart.length > 0) {  
        if (state.cart.find(item => item.id === action.payload.id)) {
          const index = state.cart.findIndex((item) => item.id === action.payload.id);
          state.cart[index][action.payload.prop] = action.payload.value;
        }
      }
    },
    remove: (state, action) => {
      // Remove the entire specific element from the state
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, updateCartById } = cartSlice.actions;

export default cartSlice.reducer