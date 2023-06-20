import React from 'react';
import Header from './Header';
import cartEmpty from '../images/shopping-cart-empty.svg';
import { Link } from 'react-router-dom';

const EmptyCart = (props) => {
  return (
    <>
      <div className="flex flex-wrap flex-col container mx-auto rounded-3xl bg-white px-10 pb-10">
        <Header />
        <div className="my-10 text-center flex flex-wrap flex-col grow justify-center">
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
            <Link
              to={'/'}
              className="px-10 py-3 max-w-fit bg-black font-bold text-white rounded-full"
            >
              Вернуться назад
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
