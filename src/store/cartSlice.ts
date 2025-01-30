import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "./util";

const initialState = {
  cart: loadState(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addcart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removecart: (state, action) => {
      state.cart = action.payload;
    },
    clearcart: (state) => {
      state.cart = [];
    },
  },
});

export const { addcart, removecart, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
