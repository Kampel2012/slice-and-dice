import React, { useState } from 'react';
import PizzaConfig from './PizzaConfig';
import { addItem } from '../../redux/slices/cartSlice';
import { IPizza } from '../interfaces/IPizza';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

const ProductCard: React.FC<IPizza> = ({
  imageUrl,
  title,
  price,
  id,
  types,
  sizes,
}) => {
  const typeName = ['тонкое', 'традиционное'];
  const cartItem = useAppSelector((state) =>
    state.cart.items.find((obj) => id === obj.id)
  );

  const [configPizza, setConfigPizza] = useState({
    type: types[0],
    size: sizes[0],
  });

  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeName[configPizza.type],
      size: configPizza.size,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="max-w-[280px] flex flex-wrap flex-col justify-between ">
      <div className="">
        <img alt={title} src={imageUrl} className="mx-auto w-[280px]" />
        <h3 className="text-center font-extrabold text-xl mt-3 mb-3">
          {title}
        </h3>
      </div>
      <div>
        <PizzaConfig
          types={types}
          sizes={sizes}
          setConfigPizza={setConfigPizza}
          typeName={typeName}
        />
        <div className="flex flex-wrap justify-between align-middle mt-4">
          <p className="text-xl md:text-2xl font-bold self-center">
            от {price} ₽
          </p>
          <button
            type="button"
            onClick={onClickAdd}
            className="border border-orange-600 text-orange-600 px-3 py-2 rounded-full hover:bg-orange-600 hover:text-white group">
            + Добавить
            {cartItem && (
              <span className="inline-flex items-center justify-center w-6 h-6 ml-1 border rounded-full border-orange-600 text-white bg-orange-600 group-hover:border-white">
                {cartItem?.count}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
