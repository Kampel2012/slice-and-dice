import React, { useState } from 'react';
import Category from './UI/Category';
import useWindowSize from './hooks/useWindowSize';

const Categories = (props) => {
  const [indexCategory, setIndexCategory] = useState(0);
  const [modalCategoryIsOpen, setModalCategoryIsOpen] = useState(false);

  const { width } = useWindowSize();

  function changeCategory(pos) {
    setIndexCategory(pos);
  }

  function isActive(pos) {
    return pos === indexCategory;
  }

  const categoryList = [
    'Все',
    'Мясные',
    'Вегетерианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  function toggleCategoryMenu(pos) {
    setModalCategoryIsOpen(!modalCategoryIsOpen);
    setIndexCategory(pos);
  }

  return (
    <div className="flex flex-wrap gap-2 my-10">
      {width >= 1030 &&
        categoryList.map((item, iter) => (
          <Category
            id={iter}
            key={iter}
            textBtn={item}
            isActive={isActive(iter)}
            changeCategory={changeCategory}
          />
        ))}
      {width < 1030 && (
        <div
          className="px-3 py-2 overflow-hidden cursor-pointer relative w-36 text-white bg-black rounded-xl text-center"
          onClick={() => setModalCategoryIsOpen(!modalCategoryIsOpen)}
        >
          {categoryList[indexCategory]}
        </div>
      )}
      {modalCategoryIsOpen && (
        <ul className="absolute bg-white rounded-lg overflow-hidden w-36 shadow-lg text-center">
          {categoryList.map((item, iter) => (
            <li
              onClick={() => toggleCategoryMenu(iter)}
              key={item}
              className={`px-3 py-2 cursor-pointer hover:bg-black hover:bg-opacity-20 ${
                isActive(iter) && 'text-white bg-black '
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
