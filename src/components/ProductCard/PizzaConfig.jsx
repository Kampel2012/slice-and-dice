import React, { useEffect, useState } from 'react';
import PizzaConfigOption from './PizzaConfigOption';

const PizzaConfig = ({ types, sizes, setConfigPizza, typeName }) => {
  const [typeOfDough, setTypeOfDough] = useState(types[0] || 0);
  const [currentSize, setCurrentSize] = useState(sizes[0] || sizes || null);

  useEffect(() => {
    setConfigPizza((prev) => {
      return {
        type: typeOfDough,
        size: currentSize,
      };
    });
  }, [currentSize, setConfigPizza, typeOfDough]);

  function onChangeTypeOfDough(evt) {
    setTypeOfDough(+evt.target.value);
  }

  function onChangeSize(evt) {
    setCurrentSize(+evt.target.value);
  }

  function isActiveSize(item) {
    return +currentSize === item;
  }

  function isActiveTypeOfDough(item) {
    return +typeOfDough === item;
  }

  function minMax(arr) {
    return Math.min(Math.max(arr.length, 1), 3);
  }

  function isDisable(param, array) {
    if (!array.includes(param)) return true;
    else return false;
  }

  const classesSize = `grid pt-0 pb-2 px-1 h-10 overflow-hidden grid-cols-${minMax(
    sizes
  )}`;

  return (
    <div className="bg-[#F3F3F3] rounded-md">
      <div className="grid grid-cols-2 py-2 px-1">
        {typeName.map((item, iter) => (
          <PizzaConfigOption
            isActive={isActiveTypeOfDough(iter)}
            value={iter}
            text={item}
            name={'size'}
            onChange={onChangeTypeOfDough}
            isDisable={isDisable(iter, types)}
            key={item}
          />
        ))}
      </div>

      <div className={classesSize}>
        {sizes.map((item, iter) => (
          <PizzaConfigOption
            isActive={isActiveSize(item)}
            size={item}
            value={item}
            onChange={onChangeSize}
            key={item}
            name={'size'}
            isDisable={isDisable(item, sizes)}
          />
        ))}
      </div>

      <span className="grid-cols-3" />
    </div>
  );
};

export default PizzaConfig;
