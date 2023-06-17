import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sort from '../Sort';
/* import Gallery from '../Gallery'; */ //TODO Перенести логику пицц и их загрузки в геллери
import Header from '../Header';
import Categories from '../Categories';
import ProductCard from '../ProductCard/ProductCard';
import SceletonProductCard from '../ProductCard/SceletonProductCard';
import NoPizza from '../NoPizza';
import { useSelector, useDispatch } from 'react-redux';
import { setPizzaInfo } from '../../redux/slices/pizzasSlice';

const Main = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  // redux store
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value);
  const { categoryId, sortData, sortOrder } = useSelector(
    (state) => state.filter
  );
  const pizzaInfo = useSelector((state) => state.pizzas.pizzaInfo);

  useEffect(() => {
    async function getInitialPizzas() {
      setIsLoading(true);
      const category = categoryId > 0 ? '&category=' + categoryId : '';
      const search = searchValue ? `&search=${searchValue}` : '';
      const order = `&order=${sortOrder}`;
      const sort = `sortBy=${sortData.sort}`;
      const baseUrl = `https://6479a2f0a455e257fa6376cd.mockapi.io/items?`;

      try {
        const pizzas = await axios.get(
          `${baseUrl}${sort}${category}${order}${search}`
        );
        dispatch(setPizzaInfo(pizzas.data));
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoading(false);
      }
    }
    getInitialPizzas();
  }, [categoryId, sortData, sortOrder, searchValue, dispatch]);

  const skeletons = [...new Array(8)].map((item, i) => (
    <SceletonProductCard key={i} />
  ));

  const pizzas = pizzaInfo.map((pizza) => (
    <ProductCard key={pizza.id} {...pizza} />
  ));

  return (
    <div className="min-h-screen pb-1 container mx-auto rounded-3xl bg-white">
      <div className="mx-6">
        <Header />
      </div>
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex justify-between md:px-3">
          <Categories />
          <Sort />
        </div>

        {!isLoading && pizzas.length === 0 && <NoPizza />}
        {pizzas.length !== 0 && (
          <h2 className="font-bold text-3xl ml-4"> Все пиццы </h2>
        )}

        <div className="px-4 md:px-6">
          <div className="mt-9 flex flex-wrap justify-center sm:grid grid-cols gap-x-9 gap-y-16 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mb-20">
            {isLoading ? skeletons : pizzas}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
