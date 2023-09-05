import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICategory {
  name?: string;
  sort?: string;
}

type TSortOrder = 'desc' | 'asc';

interface IInitialState {
  categoryId: number;
  sortData: ICategory;
  sortOrder: TSortOrder;
  categoriesForSort: ICategory[];
}

interface IFullSortAction {
  category?: ICategory;
  sortBy?: string;
  order?: TSortOrder;
}

const initialState: IInitialState = {
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
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortData: (state, action: PayloadAction<ICategory>) => {
      state.sortData = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<TSortOrder>) => {
      state.sortOrder = action.payload;
    },
    setFilters: (state, action: PayloadAction<IFullSortAction>) => {
      state.categoryId = Number(action.payload.category);
      state.sortData = {
        ...state.categoriesForSort.find(
          (item) => item.sort === action.payload.sortBy
        ),
      };
      if (action.payload.order) {
        state.sortOrder = action.payload.order;
      }
    },
  },
});

export const { setCategoryId, setSortData, setSortOrder, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
