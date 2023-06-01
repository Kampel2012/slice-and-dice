import React, { useState } from 'react';
import Category from './UI/Category';

const Categories = (props) => {
  const [category, setCategory] = useState('Все');

  function changeCategory(textBtn) {
    setCategory(textBtn);
  }

  function isActive(textBtn) {
    return textBtn === category;
  }

  return (
    <div>
      <div className="flex gap-2 my-10 flex-wrap">
        <Category
          textBtn={'Все'}
          isActive={isActive('Все')}
          changeCategory={changeCategory}
        />
        <Category
          textBtn={'Мясные'}
          isActive={isActive('Мясные')}
          changeCategory={changeCategory}
        />
        <Category
          textBtn={'Вегетарианские'}
          isActive={isActive('Вегетарианские')}
          changeCategory={changeCategory}
        />
        <Category
          textBtn={'Гриль'}
          isActive={isActive('Гриль')}
          changeCategory={changeCategory}
        />
        <Category
          textBtn={'Острые'}
          isActive={isActive('Острые')}
          changeCategory={changeCategory}
        />
        <Category
          textBtn={'Закрытые'}
          isActive={isActive('Закрытые')}
          changeCategory={changeCategory}
        />
      </div>
    </div>
  );
};

export default Categories;
