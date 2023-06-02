import React, { useState } from 'react';

const Sort = (props) => {
  const [sort, setSort] = useState('популярности');
  const [isActivePopup, setIsActivePopup] = useState(false);

  const categoriesForSort = ['популярности', 'цене', 'алфавиту'];

  return (
    <div className="text-sm font-bold self-center flex-wrap hidden lg:flex">
      ▲ Сортировка по:{' '}
      <div className="relative group">
        <div
          onClick={() => setIsActivePopup(!isActivePopup)}
          className="hover:cursor-pointer ml-1 mb-2 w-24"
        >
          <span className="text-orange-600 border-dashed font-normal border-b border-b-orange-600 ">
            {sort}
          </span>
        </div>

        {isActivePopup && (
          <ul className="overflow-hidden absolute cursor-pointer right-0 top-7 py-2 shadow rounded-lg font-normal text-sm w-32">
            {categoriesForSort.map((item) => (
              <li
                key={item}
                onClick={() => setSort(item)}
                className="hover:bg-orange-600 hover:bg-opacity-5 hover:font-bold hover:text-orange-600 px-2 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sort;
