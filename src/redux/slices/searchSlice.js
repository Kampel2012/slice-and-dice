import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchValue: (state, newValue) => {
      state.value = newValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
