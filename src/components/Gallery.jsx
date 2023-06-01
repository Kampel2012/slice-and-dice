import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { getPizzas } from './storage/pizzas.js';

const Gallery = (props) => {
  const [pizzaInfo, setPizzaInfo] = useState([]);

  (async () => {
    const res = await getPizzas();
    setPizzaInfo(res);
  })();

  return (
    <div className="mt-9 grid grid-cols gap-x-9 gap-y-16 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mb-20">
      {pizzaInfo.map((piz) => (
        <ProductCard key={piz.id} {...piz} />
      ))}
    </div>
  );
};

export default Gallery;
