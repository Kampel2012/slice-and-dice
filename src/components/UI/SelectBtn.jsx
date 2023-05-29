import React from 'react';

const SelectBtn = ({ textBtn, isActive }) => {
  const stylesBtn = isActive
    ? 'px-6 py-3 bg-black font-bold text-white rounded-full'
    : 'px-6 py-3 bg-[#F9F9F9] font-bold text-[#2C2C2C] rounded-full';

  return <button className={stylesBtn}>{textBtn}</button>;
};

export default SelectBtn;
