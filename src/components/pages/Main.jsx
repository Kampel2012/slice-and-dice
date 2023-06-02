import React from 'react';
import Sort from '../Sort';
import Gallery from '../Gallery';
import Header from '../Header';
import Category from '../Categories';

const Main = (props) => {
  return (
    <div className="min-h-screen pb-1 container mx-auto rounded-3xl bg-white">
      <div className="mx-6">
        <Header />
      </div>
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex justify-between">
          <Category />
          <Sort />
        </div>

        <h2 className="font-bold text-3xl ml-4"> Все пиццы </h2>
        <div className="px-4 md:px-6">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Main;
