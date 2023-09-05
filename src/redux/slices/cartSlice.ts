//TODO релизовать логику корзины
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IPizzaInCart {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
}

interface IPizzaInCartWithCount extends IPizzaInCart {
  count: number;
}

interface IInitialState {
  totalPrice: number;
  items: IPizzaInCartWithCount[];
}

const initialState: IInitialState = {
  totalPrice: 0,
  items: [],
};

const recalculateTotalPrice = (state: IInitialState) => {
  state.totalPrice = state.items.reduce((sum, item) => {
    if (!item.count) return sum;
    return sum + item.price * item.count;
  }, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IPizzaInCart>) => {
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
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.filter((obj) => obj.id !== action.payload);
      recalculateTotalPrice(state);
    },
    clearItems: (state) => {
      state.items = [];
      recalculateTotalPrice(state);
    },
    decreaseCountItem: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (!findItem) return;
      if (findItem.count <= 1) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
      findItem.count--;
      recalculateTotalPrice(state);
    },
    increaseCountItem: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (!findItem) return;
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
