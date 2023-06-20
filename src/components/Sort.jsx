import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortData, setSortOrder } from '../redux/slices/filterSlice';

const Sort = (props) => {
  const { sortData, sortOrder, categoriesForSort } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();
  const [isActivePopup, setIsActivePopup] = useState(false);
  const sortRef = useRef();

  const stylesCurrentSortItem = (item) =>
    item === sortData.name &&
    'font-bold text-orange-600 bg-orange-600 bg-opacity-5';

  const togglePopupsActive = () => setIsActivePopup(!isActivePopup);
  const triangle = sortOrder === 'asc' ? '▲' : '▼';

  const onSelectItem = (item) => {
    dispatch(setSortData(item));
    togglePopupsActive();
  };

  function changeSortOrderHandle() {
    dispatch(setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'));
  }

  useEffect(() => {
    function closePopupOnClickOutside(event) {
      if (!event.composedPath().includes(sortRef.current)) {
        setIsActivePopup(false);
      }
    }
    document.body.addEventListener('click', closePopupOnClickOutside);
    return () =>
      document.body.removeEventListener('click', closePopupOnClickOutside);
  }, []);

  return (
    <div
      ref={sortRef}
      className="text-sm font-bold justify-end self-center flex-wrap flex"
    >
      <span
        className="cursor-pointer text-opacity-70 text-red-600 text-md hover:text-opacity-40"
        onClick={changeSortOrderHandle}
      >
        {triangle}
      </span>
      Сортировка по:{' '}
      <div className="relative group">
        <div
          onClick={togglePopupsActive}
          className="hover:cursor-pointer ml-1 md:mb-2 w-24"
        >
          <span className="text-orange-600 border-dashed font-normal border-b border-b-orange-600 ">
            {sortData.name}
          </span>
        </div>

        {isActivePopup && (
          <ul className="bg-white overflow-hidden absolute cursor-pointer right-0 top-7 py-2 shadow rounded-lg font-normal text-sm w-32 z-10">
            {categoriesForSort.map((item, iter) => (
              <li
                key={item.name}
                onClick={() => onSelectItem(categoriesForSort[iter])}
                className={`hover:bg-orange-600 hover:bg-opacity-5 px-2 py-2 ${stylesCurrentSortItem(
                  item.name
                )}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sort;
