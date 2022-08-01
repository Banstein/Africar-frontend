import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { openModal } from '../modal/modalSlice';

const url = 'http://localhost:3000/api/v1/cars';

const initialState = {
  reservations: [],
  isLoading: true,
};

export const getCarItems = createAsyncThunk(
  'reservation/getReservations',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const carSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    clearCar: (state) => {
      state.reservationsState = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.reservations = state.reservations.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const numberOfResevation = state.carItems.find((item) => item.id === payload.id);
      carItem.amount = carItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const carItem = state.carItems.find((item) => item.id === payload.id);
      carItem.amount = carItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.carItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCarItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCarItems.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.carItems = action.payload;
    },
    [getCarItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

// console.log(carSlice);
export const { clearCar, removeItem, increase, decrease, calculateTotals } =
  carSlice.actions;

export default carSlice.reducer;
