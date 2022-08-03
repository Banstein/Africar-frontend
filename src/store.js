/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import carReducer from './features/car/carSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    modal: modalReducer,
  },
});
