import React from 'react';
import headerLogo from '../images/logoHeader.png';
import cartLogo from '../images/shopping-cart.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from './Search';
import { useSelector } from 'react-redux';

const Header = () => {
  const location = useLocation();
  const isACart =
    location.pathname === '/cart' || location.pathname === '/emptycart';

  const navigate = useNavigate();
  const { items, totalPrice } = useSelector((state) => state.cart);

  function onClickCart() {
    navigate('/cart');
  }

  function onClickLogo() {
    navigate('/');
  }

  return (
    <div className="flex flex-wrap justify-between min-h-[144px] lg:min-h-[144px] md:mx-4">
      <div className="container mx-auto flex md:justify-between justify-center items-center flex-wrap md:flex-row flex-col">
        <div className="flex self-center cursor-pointer" onClick={onClickLogo}>
          <img
            src={headerLogo}
            alt="логотип компании"
            className="w-14 h-14 mr-4"
          />
          <div>
            <h1 className="text-lg sm:text-2xl font-extrabold">
              SLISE AND DICE
            </h1>
            <p className="text-base text-gray-500">
              самая лучшая пицца во вселенной
            </p>
          </div>
        </div>

        {!isACart && (
          <div
            className="w-40 h-14 justify-center text-white bg-orange-600 rounded-full gap-3 cursor-pointer flex items-center mt-5 lg:mt-0"
            onClick={onClickCart}
          >
            <div className="">{totalPrice} ₽</div>
            <p className="opacity-25 text-2xl">|</p>
            <div className="flex">
              <img src={cartLogo} alt="Иконка корзины" />
              <span className="ml-1">{items.length}</span>
            </div>
          </div>
        )}

        {!isACart && (
          <div className="md:w-2/3 w-full mt-10 mb-2">
            <Search />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
