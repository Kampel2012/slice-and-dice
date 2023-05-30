import React from 'react';
import Header from '../Header';
import shoppingCartIcon from '../../images/shopping-cart-black.svg';
import trashIcon from '../../images/trash-icon-white.svg';
import ProductInCart from '../ProductInCart';

const Cart = (props) => {
  return (
    <>
      <Header />
      <div className="min-h-screen max-w-[820px] mx-auto mt-20 ">
        <div className="flex flex-wrap justify-between pb-7">
          <div className="flex flex-wrap gap-x-3">
            <img src={shoppingCartIcon} alt="Иконка продуктовой корзины" />
            <h3 className="font-bold text-3xl">Корзина</h3>
          </div>
          <div className="flex cursor-pointer text-[#B6B6B6] hover:text-gray-500 duration-300 gap-x-1">
            <img className="self-center" src={trashIcon} alt="Иконка корзины" />
            <p className=" self-center">Очистить корзину</p>
          </div>
        </div>
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
        <div className="flex flex-wrap justify-between gap-x-4 mt-4">
          <p className="text-xl">
            Всего пицц: <span className="font-bold">3 шт.</span>
          </p>
          <p className="text-xl">
            Сумма заказа:{' '}
            <span className="font-bold text-orange-600">900 ₽</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-x-4 mt-10">
          <button
            type="button"
            disabled="disabled"
            className="px-9 py-4 bg-orange-600 font-bold text-white rounded-full disabled:bg-white disabled:font-normal disabled:border disabled:border-gray-300 disabled:text-gray-300"
          >
            <span className="mr-2">&#10094;</span> Вернуться назад
          </button>
          <button
            type="button"
            className="px-9 py-4 bg-orange-600 font-bold text-white rounded-full"
          >
            Оплатить сейчас
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
