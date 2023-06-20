//TODO релизовать логику корзины
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const recalculateTotalPrice = (state, action) => {
  state.totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      recalculateTotalPrice(state);
    },
    removeItem: (state, action) => {
      state.items.filter((obj) => obj.id !== action.payload);
      recalculateTotalPrice(state);
    },
    clearItems: (state, action) => {
      state.items = [];
      recalculateTotalPrice(state);
    },
    decreaseCountItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem.count <= 1) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
      findItem.count--;
      recalculateTotalPrice(state);
    },
    increaseCountItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      findItem.count++;
      recalculateTotalPrice(state);
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItems,
  decreaseCountItem,
  increaseCountItem,
} = cartSlice.actions;

export default cartSlice.reducer;
