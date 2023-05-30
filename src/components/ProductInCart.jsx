import React from 'react';
import testIcon from '../images/AsiaCrev.png';
import Counter from './UI/Counter';

const ProductInCart = (props) => {
  return (
    <div className="max-w-[820px] py-7 flex flex-wrap gap-x-4 items-center justify-between border-t ">
      <div className="flex flex-wrap gap-x-5">
        <img
          src={props.img || testIcon}
          alt={props.title}
          className="w-20 h-20"
        />
        <div className="self-center">
          <p className="font-bold text-xl">
            {props.title || 'Креветки по-азиатски'}
          </p>
          <p className="text-lg text-[#8D8D8D] tracking-wide">
            {props.settings || 'тонкое тесто, 40 см.'}
          </p>
        </div>
      </div>
      <Counter />
      <div className="font-bold text-xl">770 ₽</div>
      <button
        type="button"
        className="px-2 rounded-full border-2 border-gray-300 self-center font-bold text-gray-300 hover:border-gray-400 hover:text-gray-400 duration-300"
      >
        x
      </button>
    </div>
  );
};

export default ProductInCart;
