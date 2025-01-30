import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/* Functions */
import { loadState } from "./util";
/* Type */
import { Books } from "../components/List-books";


interface CartState {
  cart: Array<Books>;
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartStore",
  initialState: initialState,
  reducers: {
    addcart: (state, action: PayloadAction<CartState>) => {
      state.cart = [];
    },
    removecart: (state, action: PayloadAction<CartState>) => {
      state.cart = [];
    },
    clearcart: (state) => {
      state.cart = [];
    },
  },
});

export const { addcart, removecart } = cartSlice.actions;
export default cartSlice.reducer;
