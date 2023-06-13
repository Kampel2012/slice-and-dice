import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: '',
};

export const searchSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzaData: (state, newValue) => {
      state.pizzas = newValue;
    },
  },
});

export const { setPizzaData } = searchSlice.actions;

export default searchSlice.reducer;
