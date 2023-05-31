import React from 'react';
import Sort from '../Sort';
import Gallery from '../Gallery';
import Header from '../Header';
import Category from '../Categories';

const Main = (props) => {
  return (
    <div className="min-h-screen pb-10">
      <Header />
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-between">
          <Category />
          <Sort />
        </div>

        <h2 className="font-bold text-3xl"> Все пиццы </h2>
        <Gallery />
      </div>
    </div>
  );
};

export default Main;
