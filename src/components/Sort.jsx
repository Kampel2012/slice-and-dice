import React, { useState } from 'react';

const Sort = (props) => {
  const categoriesForSort = ['популярности', 'цене', 'алфавиту'];

  const [sort, setSort] = useState(0);
  const [isActivePopup, setIsActivePopup] = useState(false);

  const stylesCurrentSortItem = (item) =>
    item === categoriesForSort[sort] &&
    'font-bold text-orange-600 bg-orange-600 bg-opacity-5';

  const togglePopupsActive = () => setIsActivePopup(!isActivePopup);

  const onSelectItem = (item) => {
    setSort(item);
    togglePopupsActive();
  };

  return (
    <div className="text-sm font-bold self-center flex-wrap hidden lg:flex">
      ▲ Сортировка по:{' '}
      <div className="relative group">
        <div
          onClick={togglePopupsActive}
          className="hover:cursor-pointer ml-1 mb-2 w-24"
        >
          <span className="text-orange-600 border-dashed font-normal border-b border-b-orange-600 ">
            {categoriesForSort[sort]}
          </span>
        </div>

        {isActivePopup && (
          <ul className="overflow-hidden absolute cursor-pointer right-0 top-7 py-2 shadow rounded-lg font-normal text-sm w-32">
            {categoriesForSort.map((item, iter) => (
              <li
                key={item}
                onClick={() => onSelectItem(iter)}
                className={`hover:bg-orange-600 hover:bg-opacity-5 px-2 py-2 ${stylesCurrentSortItem(
                  item
                )}`}
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
