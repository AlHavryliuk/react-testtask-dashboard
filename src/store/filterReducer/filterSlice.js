import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'customers',
  initialState: initialState,
  reducers: {
    setKeyWord(state, { payload }) {
      state.filter = payload;
    },
  },
});

const filterReducer = filterSlice.reducer;
export const { setKeyWord } = filterSlice.actions;
export default filterReducer;
