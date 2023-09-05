import React, { FC } from 'react';
import Counter from './UI/Counter';
import {
  decreaseCountItem,
  increaseCountItem,
} from '../redux/slices/cartSlice';
import { useAppDispatch } from './hooks/reduxHooks';

interface IProductInCartProps {
  title: string;
  price: number;
  id: number;
  imageUrl: string;
  type?: string;
  size?: number;
  count: number;
}

const ProductInCart: FC<IProductInCartProps> = ({
  title,
  price,
  id,
  imageUrl,
  type,
  size,
  count,
}) => {
  const dispatch = useAppDispatch();
  const decrease = () => dispatch(decreaseCountItem(id));
  const increase = () => dispatch(increaseCountItem(id));

  return (
    <div className="max-w-[820px] py-7 items-center border-t border-b flex-wrap justify-between md:flex gap-x-6 text-center">
      <div className="flex flex-wrap sm:gap-x-5 gap-x-4 grow">
        <img src={imageUrl} alt={title} className="w-20 h-20" />
        <div className="self-center text-left">
          <p className="font-bold sm:text-xl text-lg">
            {title || 'Креветки по-азиатски'}
          </p>
          <p className="sm:text-lg text-md text-[#8D8D8D] tracking-wide">
            {`${type}, ${size} см` || 'тонкое тесто, 40 см.'}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-between px-3 md:mt-0 mt-3">
        <div className="font-bold text-xl">{price * count} ₽</div>
        <Counter count={count} decrease={decrease} increase={increase} />
      </div>
    </div>
  );
};

export default ProductInCart;
