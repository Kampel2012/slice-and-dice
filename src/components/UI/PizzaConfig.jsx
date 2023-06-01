import React, { useState } from 'react';

const PizzaConfig = ({ id }) => {
  const [typeOfDough, setTypeOfDough] = useState('thin');
  const [size, setSize] = useState('small');

  function onChangeTypeOfDough(evt) {
    setTypeOfDough(evt.target.value);
  }

  function onChangeSize(evt) {
    setSize(evt.target.value);
  }

  const defaultStyles =
    'text-center py-2 text-sm font-bold rounded-md transition cursor-pointer';

  const activeStyles = defaultStyles + 'shadow bg-white';

  return (
    <div className="bg-[#F3F3F3] rounded-md">
      <div className="grid grid-cols-2 py-2 px-1">
        <label
          className={typeOfDough === 'thin' ? activeStyles : defaultStyles}
        >
          <input
            type="radio"
            name="typeofdough"
            id={id}
            defaultChecked
            className="hidden"
            value="thin"
            onChange={onChangeTypeOfDough}
          />
          <span>тонкое</span>
        </label>
        <label
          className={
            typeOfDough === 'traditional' ? activeStyles : defaultStyles
          }
        >
          <input
            type="radio"
            name="typeofdough"
            id={id}
            className="hidden"
            value="traditional"
            onChange={onChangeTypeOfDough}
          />
          <span>традиционное</span>
        </label>
      </div>

      <div className="grid grid-cols-3 pt-0 pb-2 px-1 ">
        <label className={size === 'small' ? activeStyles : defaultStyles}>
          <input
            type="radio"
            name="size"
            id={id}
            defaultChecked
            className="hidden"
            value="small"
            onChange={onChangeSize}
          />
          <span>26см.</span>
        </label>

        <label className={size === 'medium' ? activeStyles : defaultStyles}>
          <input
            type="radio"
            name="size"
            id={id}
            className="hidden"
            value="medium"
            onChange={onChangeSize}
          />
          <span>30см.</span>
        </label>

        <label className={size === 'large' ? activeStyles : defaultStyles}>
          <input
            type="radio"
            name="size"
            id={id}
            className="hidden"
            value="large"
            onChange={onChangeSize}
          />
          <span>40см.</span>
        </label>
      </div>
    </div>
  );
};

export default PizzaConfig;
