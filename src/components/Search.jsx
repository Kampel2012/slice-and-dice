import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchValue } from '../redux/slices/searchSlice';
import useDebounce from './hooks/useDebounce';

const Search = () => {
  const searchValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const debounceSetSearchValue = useDebounce((e) => {
    dispatch(changeSearchValue(e.target.value));
  }, 1000);

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
