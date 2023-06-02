import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

const Gallery = (props) => {
  const [pizzaInfo, setPizzaInfo] = useState([]);

  useEffect(() => {
    async function getInitialPizzas() {
      try {
        const pizzas = await axios.get(
          'https://6479a2f0a455e257fa6376cd.mockapi.io/items'
        );
        setPizzaInfo(pizzas.data);
      } catch (error) {
        console.warn(error);
      }
    }
    getInitialPizzas();
  }, []);

  return (
    <div className="mt-9 grid grid-cols gap-x-9 gap-y-16 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mb-20">
      {pizzaInfo.map((piz) => (
        <ProductCard key={piz.id} {...piz} />
      ))}
    </div>
  );
};

export default Gallery;
