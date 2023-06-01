import React from 'react';

const Category = ({ textBtn, isActive, changeCategory }) => {
  function changeCategoryOnClick() {
    changeCategory(textBtn);
  }

  const stylesBtn = isActive
    ? 'px-6 py-3 bg-black font-bold text-white rounded-full duration-200'
    : 'px-6 py-3 bg-[#F9F9F9] font-bold text-[#2C2C2C] rounded-full duration-200';

  return (
    <button type="button" className={stylesBtn} onClick={changeCategoryOnClick}>
      {textBtn}
    </button>
  );
};

export default Category;
