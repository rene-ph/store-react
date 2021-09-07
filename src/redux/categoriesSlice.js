import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  isLoading: true,
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    add: (state, action) => {
      state.categories = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  },
});
export const { add, setLoading } = categoriesSlice.actions;

export default categoriesSlice.reducer