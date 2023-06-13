import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzaInfo: [],
};

export const searchSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzaInfo: (state, action) => {
      state.pizzaInfo = action.payload;
    },
  },
});

export const { setPizzaInfo } = searchSlice.actions;

export default searchSlice.reducer;
