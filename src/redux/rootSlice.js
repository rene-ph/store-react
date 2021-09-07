import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayModal: {
        state: false,
        text: '',
        type: ''
    },
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
      setDisplayModal: (state, action) => {
          state.displayModal.state = action.payload.state
          state.displayModal.text = action.payload.text
          state.displayModal.type = action.payload.type
      }
  },
});

export const { setDisplayModal } = rootSlice.actions;
export default rootSlice.reducer