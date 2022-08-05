/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { openModal } from '../modal/modalSlice';

const url = 'https://africar-premium.herokuapp.com/api/v1/cars';

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
  },
  extraReducers: {
    [getCarItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCarItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.carItems = action.payload;
    },
    [getCarItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// console.log(carSlice);
export const { clearCar, removeItem } = carSlice.actions;

export default carSlice.reducer;
