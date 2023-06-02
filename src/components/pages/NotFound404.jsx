import React from 'react';
import Header from '../Header';

const NotFound404 = (props) => {
  return (
    <div className="container mx-auto rounded-3xl bg-white px-10 min-h-[600px]">
      <Header />
      <div className="container mx-auto text-center">
        <h1 className=" mt-32 text-5xl"> &#129300; </h1>
        <p className="text-4xl font-semibold pt-6">Ничего не найдено</p>
        <p className="text-lg pt-4">
          К сожалению данная страница отсутствует в нашем интернет-магазине
        </p>
      </div>
    </div>
  );
};

export default NotFound404;
