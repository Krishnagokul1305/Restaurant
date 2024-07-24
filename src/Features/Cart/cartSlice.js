import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    increaseQuantity(state, action) {
      const currentItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (currentItem) {
        currentItem.quantity++;
        currentItem.totalPrice = currentItem.unitPrice * currentItem.quantity;
      }
    },
    decreaseQuantity(state, action) {
      const currentItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (currentItem) {
        currentItem.quantity--;
        currentItem.totalPrice = currentItem.unitPrice * currentItem.quantity;
      }
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
