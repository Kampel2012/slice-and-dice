import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchValue } from '../redux/slices/searchSlice';

const Search = () => {
  const searchValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  function debounce(func, delay) {
    let timer;
    return function () {
      const context = this;
      const args = arguments;

      clearTimeout(timer);

      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSetSearchValue = useCallback(
    debounce((e) => {
      dispatch(changeSearchValue(e.target.value));
    }, 1000),
    []
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
