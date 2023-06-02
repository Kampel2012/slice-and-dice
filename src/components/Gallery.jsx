import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import axios from 'axios';
import SceletonProductCard from './ProductCard/SceletonProductCard';

const Gallery = (props) => {
  const [pizzaInfo, setPizzaInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getInitialPizzas() {
    setIsLoading(true);
    try {
      const pizzas = await axios.get(
        'https://6479a2f0a455e257fa6376cd.mockapi.io/items'
      );
      setPizzaInfo(pizzas.data);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getInitialPizzas();
  }, []);

  return (
    <div className="mt-9 grid grid-cols gap-x-9 gap-y-16 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mb-20">
      {isLoading
        ? [...new Array(8)].map((item, i) => <SceletonProductCard key={i} />)
        : pizzaInfo.map((piz) => <ProductCard key={piz.id} {...piz} />)}
    </div>
  );
};

export default Gallery;
