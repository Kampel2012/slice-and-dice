import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPizza } from '../../components/interfaces/IPizza';

interface IInitialState {
  pizzaInfo: IPizza[] | [];
  status: string;
}

const initialState: IInitialState = {
  pizzaInfo: [],
  status: 'loading', // loading | success | error
};

export const fetchPizzas = createAsyncThunk(
  `pizza/fetchPizzasStatus`,
  async (url: string) => {
    const { data } = await axios.get<IPizza[]>(url);
    return data;
  }
);

export const searchSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzaInfo: (state, action) => {
      state.pizzaInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.pizzaInfo = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzaInfo = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.pizzaInfo = [];
    });
  },
});

export const { setPizzaInfo } = searchSlice.actions;

export default searchSlice.reducer;
