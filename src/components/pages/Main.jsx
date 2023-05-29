import React from 'react';
import Sort from '../Sort';
import Gallery from '../Gallery';

const Main = (props) => {
  return (
    <div className="container mx-auto">
      <Sort />
      <h2 className="font-bold text-3xl"> Все пиццы </h2>
      <Gallery />
    </div>
  );
};

export default Main;
