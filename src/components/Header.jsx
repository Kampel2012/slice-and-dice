import React from 'react';
import headerLogo from '../images/logoHeader.png';
import cartLogo from '../images/shopping-cart.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = (props) => {
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
    <div className="flex justify-between h-36 border-b">
      <div className="container mx-auto flex justify-between">
        <div className="flex self-center cursor-pointer" onClick={onClickLogo}>
          <img
            src={headerLogo}
            alt="логотип компании"
            className="w-14 h-14 mr-4 self-center"
          />
          <div>
            <h1 className="text-2xl font-extrabold">SLISE AND DICE</h1>
            <p className="text-base text-gray-500">
              самая лучшая пицца во вселенной
            </p>
          </div>
        </div>
        {!isACart && (
          <div
            className="self-center flex w-40 h-14 justify-center text-white bg-orange-600 rounded-full gap-3 cursor-pointer"
            onClick={onClickCart}
          >
            <div className="self-center">520 ₽</div>
            <p className="self-center  opacity-25 text-2xl">|</p>
            <div className="self-center flex">
              <img src={cartLogo} alt="Иконка корзины" />
              <span className="ml-1">3</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
