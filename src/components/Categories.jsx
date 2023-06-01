import React, { useState } from 'react';
import Category from './UI/Category';

const Categories = (props) => {
  const [indexCategory, setIndexCategory] = useState(0);

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

  return (
    <div>
      <div className="flex gap-2 my-10 flex-wrap">
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
    </div>
  );
};

export default Categories;
