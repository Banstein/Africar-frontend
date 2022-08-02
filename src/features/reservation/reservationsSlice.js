import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { openModal } from '../modal/modalSlice';

const url = 'http://localhost:3000/api/v1/cars';

const initialState = {
  reservations: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

export const getReservations = createAsyncThunk(
  'reservation/getReservations',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    clearCar: (state) => {
      state.reservationState = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.reservations = state.reservations.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const reservation = state.reservations.find((item) => item.id === payload.id);
      reservation.amount += 1;
    },
    decrease: (state, { payload }) => {
      const reservation = state.reservations.find((item) => item.id === payload.id);
      reservation.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.reservations.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getReservations.pending]: (state) => {
      state.isLoading = true;
    },
    [getReservations.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.reservations = action.payload;
    },
    [getReservations.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

// console.log(carSlice);
export const {
  clearCar, removeItem, increase, decrease, calculateTotals,
} = reservationSlice.actions;

export default reservationSlice.reducer;
