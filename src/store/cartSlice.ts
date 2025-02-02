import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/* Functions */
import { loadState } from "./util";


export interface ItemCart {
  id: number;
  name: string;
  image: string;
  price: number;
  detail: string;
  quantity: number;
};

interface CartState {
  cart: Array<ItemCart>;
}

const initialState: CartState = {
  cart: loadState(),
};

export const cartSlice = createSlice({
  name: "cartStore",
  initialState: initialState,
  reducers: {
    addcart: (state, action: PayloadAction<ItemCart>) => {
      state.cart = [...state.cart, action.payload];
    },
    updateCart: (state, action: PayloadAction<ItemCart[]>) => {
      state.cart = action.payload;
    },
  },
});

export const { addcart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
