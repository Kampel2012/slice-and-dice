import React from 'react';
import PizzaConfig from './UI/PizzaConfig';

const ProductCard = ({ src, title, price, id }) => {
  return (
    <div className="max-w-[280px]">
      <img alt={title} src={src} className="mx-auto w-[280px]" />
      <h3 className="text-center font-extrabold text-xl mt-3 mb-6">{title}</h3>
      <PizzaConfig />
      <div className="flex flex-wrap justify-between align-middle mt-4">
        <p className="text-2xl font-bold self-center">от {price} ₽</p>
        <button className="border border-orange-600 text-orange-600 px-5 py-2 font-bold rounded-full hover:bg-orange-600 hover:text-white">
          + Добавить
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
