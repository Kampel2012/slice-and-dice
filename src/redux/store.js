import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import searchReducer from './slices/searchSlice';
import pizzaReducer from './slices/pizzasSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    pizzas: pizzaReducer,
    cart: cartReducer,
  },
});
