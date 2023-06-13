import React from 'react';
import headerLogo from '../images/logoHeader.png';
import cartLogo from '../images/shopping-cart.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  const location = useLocation();
  const isACart =
    location.pathname === '/cart' || location.pathname === '/emptycart';

  const navigate = useNavigate();

  function onClickCart() {
    navigate('/cart');
  }

  function onClickLogo() {
    navigate('/');
  }

  return (
    <div className="flex flex-wrap justify-between min-h-[180px] lg:min-h-[144px] md:mx-4">
      <div className="container mx-auto flex md:justify-between justify-center items-center flex-wrap lg:flex-row flex-col mt-10">
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
            <div className="">520 ₽</div>
            <p className="opacity-25 text-2xl">|</p>
            <div className="flex">
              <img src={cartLogo} alt="Иконка корзины" />
              <span className="ml-1">3</span>
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
