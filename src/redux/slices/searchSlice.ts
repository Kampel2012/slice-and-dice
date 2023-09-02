import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  value: string;
}

const initialState: IInitialState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
