import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import Sort from '../Sort';
/* import Gallery from '../Gallery'; */ //TODO Перенести логику пицц и их загрузки в геллери
import Header from '../Header';
import Categories from '../Categories';
import ProductCard from '../ProductCard/ProductCard';
import SceletonProductCard from '../ProductCard/SceletonProductCard';
import NoPizza from '../NoPizza';
import { useSelector, useDispatch } from 'react-redux';
import { setPizzaInfo } from '../../redux/slices/pizzasSlice';
import { useNavigate } from 'react-router';
import { setFilters } from '../../redux/slices/filterSlice';

const Main = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchValue = useSelector((state) => state.search.value);
  const pizzaInfo = useSelector((state) => state.pizzas.pizzaInfo);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);
      dispatch(setFilters(params));
      isSearch.current = true;
    }
  }, [dispatch]);

  const { categoryId, sortData, sortOrder } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortBy: sortData.sort,
        category: categoryId,
        order: sortOrder,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, navigate, sortData.sort, sortOrder]);

  useEffect(() => {
    if (!isSearch.current) {
      getInitialPizzas();
    }
    
    isSearch.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortData, sortOrder, searchValue, dispatch]);

  const skeletons = [...new Array(8)].map((item, i) => (
    <SceletonProductCard key={i} />
  ));

  const pizzas = pizzaInfo.map((pizza) => (
    <ProductCard key={pizza.id} {...pizza} />
  ));

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

  return (
    <div className="min-h-screen pb-1 container mx-auto rounded-3xl bg-white">
      <div className="mx-6">
        <Header />
      </div>
      <div className="container mx-auto px-3 md:px-6">
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
