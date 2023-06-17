import React, { useState } from 'react';
import Category from './UI/Category';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

const Categories = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const [modalCategoryIsOpen, setModalCategoryIsOpen] = useState(false);

  function isActive(pos) {
    return pos === categoryId;
  }

  const categoryList = [
    'Все',
    'Мясные',
    'Вегетерианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  function changeCategory(id) {
    dispatch(setCategoryId(id));
  }

  function toggleCategoryMenu(pos) {
    setModalCategoryIsOpen(!modalCategoryIsOpen);
    changeCategory(pos);
  }

  return (
    <div className="flex flex-wrap  my-10">
      <div className="hidden lg:flex flex-wrap gap-1">
        {categoryList.map((item, iter) => (
          <Category
            id={iter}
            key={iter}
            textBtn={item}
            isActive={isActive(iter)}
            changeCategory={changeCategory}
          />
        ))}
      </div>
      {
        <div
          className="px-3 py-2 overflow-hidden cursor-pointer relative w-36 text-white bg-black rounded-xl text-center lg:hidden"
          onClick={() => setModalCategoryIsOpen(!modalCategoryIsOpen)}
        >
          {categoryList[categoryId]}
        </div>
      }
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
