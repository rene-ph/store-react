import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: {
      user: null,
      token: null
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
//export const { add, remove } = cartSlice.actions;

export default authSlice.reducer