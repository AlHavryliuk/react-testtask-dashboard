import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState: initialState,
  reducers: {
    openMenu(state) {
      state.menuOpen = true;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
  },
});

const burgerReducer = burgerSlice.reducer;
export const { openMenu, closeMenu } = burgerSlice.actions;
export default burgerReducer;
