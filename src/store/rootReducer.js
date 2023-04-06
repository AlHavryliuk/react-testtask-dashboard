import { combineReducers } from '@reduxjs/toolkit';
import customerReducer from './customerReducer/customerSlice';
import filterReducer from './filterReducer/filterSlice';
import burgerReducer from './burgerReducer/burgerSlice';

export const rootReducer = combineReducers({
  customers: customerReducer,
  filter: filterReducer,
  burger: burgerReducer,
});
