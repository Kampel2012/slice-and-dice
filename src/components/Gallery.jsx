import React from 'react';
import ProductCard from './ProductCard';
import testImg from '../images/AsiaCrev.png';

const Gallery = (props) => {
  return (
    <div className="mt-9 grid grid-cols gap-x-9 gap-y-16 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mb-20">
      <ProductCard title="Креветки по-азиатски" src={testImg} price="395" />
      <ProductCard title="Креветки по-азиатски" src={testImg} price="395" />
      <ProductCard title="Креветки по-азиатски" src={testImg} price="395" />
      <ProductCard title="Креветки по-азиатски" src={testImg} price="395" />
      <ProductCard title="Креветки по-азиатски" src={testImg} price="395" />
      <ProductCard title="Креветки по-азиатски" src={testImg} price="395" />
      <ProductCard title="Креветки по-азиатски" src={testImg} price="395" />
      <ProductCard title="Креветки по-азиатски" src={testImg} price="395" />
    </div>
  );
};

export default Gallery;
