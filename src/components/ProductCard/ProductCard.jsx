import React, { useState } from 'react';
import PizzaConfig from './PizzaConfig';

const ProductCard = ({
  imageUrl,
  title,
  price,
  id,
  types,
  sizes,
  category,
  rating,
}) => {
  const [pizzaCount, setPizzaCount] = useState(0);
  function onClickAdd() {
    setPizzaCount((prev) => (prev + 1 > 9 ? 9 : prev + 1));
  }

  return (
    <div className="max-w-[280px] flex flex-wrap flex-col justify-between ">
      <div className="">
        <img alt={title} src={imageUrl} className="mx-auto w-[280px]" />
        <h3 className="text-center font-extrabold text-xl mt-3 mb-3">
          {title}
        </h3>
      </div>
      <div>
        <PizzaConfig types={types} sizes={sizes} />
        <div className="flex flex-wrap justify-between align-middle mt-4">
          <p className="text-2xl font-bold self-center">от {price} ₽</p>
          <button
            type="button"
            onClick={onClickAdd}
            className="border border-orange-600 text-orange-600 px-2 py-2 rounded-full hover:bg-orange-600 hover:text-white group"
          >
            + Добавить
            <span className="inline-flex items-center justify-center w-6 h-6 ml-1 border rounded-full border-orange-600 text-white bg-orange-600 group-hover:border-white">
              {pizzaCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
