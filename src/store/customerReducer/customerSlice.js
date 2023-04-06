import { createSlice } from '@reduxjs/toolkit';
import { customersData } from 'data/userData';

const initialState = {
  customers: customersData,
};

export const customerSlice = createSlice({
  name: 'customers',
  initialState: initialState,
});

const customerReducer = customerSlice.reducer;
export default customerReducer;
