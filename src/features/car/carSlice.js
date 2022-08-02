import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { openModal } from '../modal/modalSlice';

const url = 'http://localhost:3000/api/v1/cars';

const initialState = {
  carItems: [],
  isLoading: true,
};

export const getCarItems = createAsyncThunk(
  'car/getCarItems',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    clearCar: (state) => {
      state.carItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.carItems = state.carItems.filter((item) => item.id !== itemId);
    },
<<<<<<< HEAD
    increase: (state, { payload }) => {
      const carItem = state.carItems.find((item) => item.id === payload.id);
      carItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const carItem = state.carItems.find((item) => item.id === payload.id);
      carItem.amount -= 1;
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
=======
>>>>>>> 627a70827361a847c2e6a3fe6e43faaa95ae2018
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
<<<<<<< HEAD
export const {
  clearCar, removeItem, increase, decrease, calculateTotals,
} = carSlice.actions;
=======
export const { clearCar, removeItem } =
  carSlice.actions;
>>>>>>> 627a70827361a847c2e6a3fe6e43faaa95ae2018

export default carSlice.reducer;
