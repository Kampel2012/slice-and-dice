import React from 'react';
import Header from '../Header';
import EmptyCart from '../EmptyCart';
import shoppingCartIcon from '../../images/shopping-cart-black.svg';
import trashIcon from '../../images/trash-icon-white.svg';
import ProductInCart from '../ProductInCart';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  const pizzas = items.map((item) => <ProductInCart key={item.id} {...item} />);

  const quantityOfPizzas = items.reduce((sum, item) => sum + item.count, 0);
  const clearCartItems = () => dispatch(clearItems());

  if (!totalPrice) return <EmptyCart />;

  return (
    <div className="container mx-auto rounded-3xl bg-white px-3 sm:px-10 min-h-[97vh] pb-10">
      <div className="mx-6">
        <Header />
      </div>

      <div className="max-w-[820px] mx-auto align-middle">
        <div className="flex flex-wrap justify-between pb-7 gap-2">
          <div className="flex flex-wrap gap-x-1 md:gap-x-3">
            <img
              className="md:w-auto w-5"
              src={shoppingCartIcon}
              alt="Иконка продуктовой корзины"
            />
            <h3 className="font-bold md:text-3xl text-xl">Корзина</h3>
          </div>
          <div className="flex cursor-pointer text-[#B6B6B6] hover:text-gray-500 duration-300 gap-x-1">
            <img className="self-center" src={trashIcon} alt="Иконка корзины" />
            <button
              onClick={clearCartItems}
              type="button"
              className=" self-center">
              Очистить корзину
            </button>
          </div>
        </div>

        {pizzas}

        <div className="flex flex-wrap justify-between gap-x-4 mt-12">
          <p className="text-xl">
            Всего пицц:{' '}
            <span className="font-bold">{quantityOfPizzas} шт.</span>
          </p>
          <p className="text-xl">
            Сумма заказа:
            <span className="font-bold text-orange-600"> {totalPrice} ₽</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-between mt-10 gap-y-4">
          <Link
            to="/"
            className="sm:px-9 px-2 sm:py-4 py-2 bg-orange-600 font-bold text-white rounded-full disabled:bg-white disabled:font-normal disabled:border disabled:border-gray-300 disabled:text-gray-300">
            <span className="mr-2">&#10094;</span> Вернуться
          </Link>
          <button
            onClick={() => {
              alert('Оплата принята, ждите в течении часика <3');
              clearCartItems();
            }}
            type="button"
            className="sm:px-9 px-2 sm:py-4 py-2 bg-orange-600 font-bold text-white rounded-full">
            Оплатить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
