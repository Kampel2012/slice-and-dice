import React, { useEffect, useRef } from 'react';
import qs from 'qs'; // библиотека для парса адрессной строки
import Sort from '../Sort';
import Header from '../Header';
import Categories from '../Categories';
import ProductCard from '../ProductCard/ProductCard';
import SceletonProductCard from '../ProductCard/SceletonProductCard';
import NoPizza from '../NoPizza';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../../redux/slices/pizzasSlice';
import { useNavigate } from 'react-router';
import { setFilters } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';
import { IPizza } from '../interfaces/IPizza';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const searchValue = useSelector((state: RootState) => state.search.value);
  const { pizzaInfo, status } = useSelector((state: RootState) => state.pizzas);
  const { categoryId, sortData, sortOrder } = useSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(params));
      isSearch.current = true;
    }
  }, [dispatch]);

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

  const pizzas = pizzaInfo.map((pizza: IPizza) => (
    <ProductCard key={pizza.id} {...pizza} />
  ));

  async function getInitialPizzas() {
    const category = categoryId > 0 ? '&category=' + categoryId : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    const order = `&order=${sortOrder}`;
    const sort = `sortBy=${sortData.sort}`;
    const baseUrl = `https://6479a2f0a455e257fa6376cd.mockapi.io/items?`;
    const url = `${baseUrl}${sort}${category}${order}${search}`;

    dispatch(fetchPizzas(url) as any); //!Поправить any
  }

  return (
    <div className="min-h-screen pb-1 container mx-auto rounded-3xl bg-white">
      <div className="mx-6 pt-10">
        <Header />
      </div>
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex justify-between md:px-3">
          <Categories />
          <Sort />
        </div>

        {status !== 'loading' && pizzas.length === 0 && <NoPizza />}
        {(pizzas.length !== 0 || status === 'loading') && (
          <h2 className="font-bold text-3xl ml-4"> Все пиццы </h2>
        )}

        <div className="px-4 md:px-6">
          <div className="mt-9 flex flex-wrap justify-center sm:grid grid-cols gap-x-9 gap-y-16 xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 mb-20">
            {status === 'loading' ? skeletons : pizzas}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
