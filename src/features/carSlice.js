import { createSlice } from "@reduxjs/toolkit";
import carItems from "../components/carlist/carItems";

const intialState = {
  carItems: carItems
}

const carSlice = createSlice({
  name: 'car',
  intialState,
});

export default carSlice.reducer;
