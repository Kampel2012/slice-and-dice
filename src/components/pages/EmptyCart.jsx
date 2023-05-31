import React from 'react';
import Header from '../Header';
import cartEmpty from '../../images/shopping-cart-empty.svg';

const EmptyCart = (props) => {
  return (
    <>
      <div className="h-screen flex flex-wrap flex-col">
        <Header />
        <div className="container mx-auto text-center flex flex-wrap flex-col grow justify-center">
          <h2 className="font-bold text-3xl tracking-wide mt-3">
            Корзина пустая 😕
          </h2>
          <p className="mt-3 max-w-xl mx-auto tracking-wide text-lg">
            Вероятней всего, вы не заказывали ещё пиццу.
          </p>
          <p className="max-w-xl mx-auto tracking-wide text-lg">
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img alt="Пустая корзина" src={cartEmpty} className="mt-12" />
          <div className="mt-[60px]">
            <button className="px-10 py-3 max-w-fit bg-black font-bold text-white rounded-full">
              Вернуться назад
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
