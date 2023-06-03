import React, { useEffect, useState } from 'react';
import Sort from '../Sort';
/* import Gallery from '../Gallery'; */
import Header from '../Header';
import Category from '../Categories';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import SceletonProductCard from '../ProductCard/SceletonProductCard';

const Main = (props) => {
  const [pizzaInfo, setPizzaInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortData, setSortData] = useState({
    name: 'популярности',
    sort: 'rating',
  });
  const [sortOrder, setSortOrder] = useState('desc');

  const [searchValue, setSearchValue] = useState('');

  function changeSortOrder(value) {
    setSortOrder(value);
  }

  function changeCategory(pos) {
    setCategoryId(pos);
  }

  function setSort(pos) {
    setSortData(pos);
  }

  useEffect(() => {
    async function getInitialPizzas() {
      setIsLoading(true);
      const category = categoryId > 0 ? '&category=' + categoryId : '';

      try {
        const pizzas = await axios.get(
          `https://6479a2f0a455e257fa6376cd.mockapi.io/items?sortBy=${sortData.sort}${category}&order=${sortOrder}`
        );
        setPizzaInfo(pizzas.data);
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoading(false);
      }
    }
    getInitialPizzas();
  }, [categoryId, sortData, sortOrder]);

  const skeletons = [...new Array(8)].map((item, i) => (
    <SceletonProductCard key={i} />
  ));

  const pizzas = pizzaInfo
    .filter((item) => item.title.toLowerCase().includes(searchValue))
    .map((pizza) => <ProductCard key={pizza.id} {...pizza} />);

  return (
    <div className="min-h-screen pb-1 container mx-auto rounded-3xl bg-white">
      <div className="mx-6">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex justify-between md:px-3">
          <Category changeCategory={changeCategory} categoryId={categoryId} />
          <Sort
            setSort={setSort}
            sortData={sortData}
            sortOrder={sortOrder}
            changeSortOrder={changeSortOrder}
          />
        </div>

        <h2 className="font-bold text-3xl ml-4"> Все пиццы </h2>
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
