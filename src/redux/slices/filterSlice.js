import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortData: {
    name: 'популярности',
    sort: 'rating',
  },
  sortOrder: 'desc',
  categoriesForSort: [
    { name: 'популярности', sort: 'rating' },
    { name: 'цене', sort: 'price' },
    { name: 'алфавиту', sort: 'title' },
  ],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortData: (state, action) => {
      state.sortData = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setCategoryId, setSortData, setSortOrder } = filterSlice.actions;

export default filterSlice.reducer;
