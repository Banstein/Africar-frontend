import { createSlice } from "@reduxjs/toolkit";
import carItems

const intialState = {
  carCards: []
}

const carSlice = createSlice({
  name: 'car',
  intialState
});

export default carSlice.reducer;