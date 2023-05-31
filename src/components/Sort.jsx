import React, { useState } from 'react';

// TODO прописать красивое выпадающее меню

const Sort = (props) => {
  const [sort, setSort] = useState('популярности');

  function onSwitchPopular() {
    setSort('популярности');
  }
  function onSwitchPrice() {
    setSort('цене');
  }
  function onSwitchAlf() {
    setSort('алфавиту');
  }

  return (
    <div className="text-sm font-bold self-center flex-wrap hidden lg:flex">
      ▲ Сортировка по:{' '}
      <div className="relative group">
        <div className="text-orange-600 border-dashed font-normal border-b border-b-orange-600 hover:cursor-pointer ml-1 mb-2 w-24">
          {sort}
        </div>
        <ul className="overflow-hidden absolute cursor-pointer right-0 top-7 group-hover:py-2 shadow rounded-lg font-normal text-sm group-hover:h-min w-32 h-0">
          <li
            className="hover:bg-orange-600 hover:bg-opacity-5 hover:font-bold hover:text-orange-600 px-2 py-2"
            onClick={onSwitchPopular}
          >
            популярности
          </li>
          <li
            className="hover:bg-orange-600 hover:bg-opacity-5 hover:font-bold hover:text-orange-600 px-2 py-2"
            onClick={onSwitchPrice}
          >
            цене
          </li>
          <li
            className="hover:bg-orange-600 hover:bg-opacity-5 hover:font-bold hover:text-orange-600 px-2 py-2"
            onClick={onSwitchAlf}
          >
            алфавиту
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
