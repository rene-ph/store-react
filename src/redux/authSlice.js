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

export default authSlice.reducer