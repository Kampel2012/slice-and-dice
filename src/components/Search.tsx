import React, { ChangeEvent } from 'react';
import { changeSearchValue } from '../redux/slices/searchSlice';
import useDebounce from './hooks/useDebounce';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';

const Search = () => {
  const searchValue = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();

  const debounceSetSearchValue = useDebounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changeSearchValue(e.target.value));
    },
    1000
  );

  return (
    <input
      defaultValue={searchValue}
      onChange={debounceSetSearchValue}
      placeholder="Поиск пиццы..."
      type="search"
      className="px-2 h-14 text-xl w-full border-b-2 focus:outline-none"
    />
  );
};

export default Search;
