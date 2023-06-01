import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { getPizzas } from '../components/storage/pizzaz.js';

const Gallery = (props) => {
  const [pizzaInfo, setPizzaInfo] = useState([]);

  (async () => {
    const res = await getPizzas();
    setPizzaInfo(res);
  })();

  return (
    <div className="mt-9 grid grid-cols gap-x-9 gap-y-16 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mb-20">
      {pizzaInfo.map((piz) => (
        <ProductCard
          key={piz.id}
          title={piz.title}
          price={piz.price}
          id={piz.id}
          src={piz.src}
        />
      ))}
    </div>
  );
};

export default Gallery;
