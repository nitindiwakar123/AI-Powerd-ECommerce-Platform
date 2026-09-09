import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const STORAGE_KEY = "clicon_cart_id";

interface CartState {
  cartId: string | null;
}

const initialState: CartState = {
  cartId: localStorage.getItem(STORAGE_KEY),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartId(state, action: PayloadAction<string>) {
      state.cartId = action.payload;
      localStorage.setItem(STORAGE_KEY, action.payload);
    },
    clearCartId(state) {
      state.cartId = null;
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

export const { setCartId, clearCartId } = cartSlice.actions;
export default cartSlice.reducer;
