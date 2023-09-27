import React from 'react';
import { FC, memo } from 'react';

interface CategoryProps {
  textBtn: string;
  isActive: boolean;
  changeCategory: (id: number) => void;
  id: number;
}

const Category: FC<CategoryProps> = memo(
  ({ textBtn, isActive, changeCategory, id }) => {
    function changeCategoryOnClick() {
      changeCategory(id);
    }

    const stylesBtn = isActive
      ? 'px-5 py-3 bg-black font-bold text-white rounded-full duration-200'
      : 'px-5 py-3 bg-[#F9F9F9] font-bold text-[#2C2C2C] rounded-full duration-200';

    return (
      <button
        type="button"
        className={stylesBtn}
        onClick={changeCategoryOnClick}>
        {textBtn}
      </button>
    );
  }
);

export default Category;
