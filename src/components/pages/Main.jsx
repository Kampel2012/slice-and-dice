import React from 'react';
import Sort from '../Sort';
import Gallery from '../Gallery';
import Header from '../Header';

const Main = (props) => {
  return (
    <>
      <Header />
      <div className="container mx-auto ">
        <Sort />
        <h2 className="font-bold text-3xl"> Все пиццы </h2>
        <Gallery />
      </div>
    </>
  );
};

export default Main;
