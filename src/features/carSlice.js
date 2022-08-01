import { createSlice } from '@reduxjs/toolkit';
import carItems from '../components/carlist/carItems';

const intialState = {
  // name: null,
  carItems: carItems,
};

const carSlice = createSlice({
  name: 'car',
  intialState,
});

export default carSlice.reducer;
