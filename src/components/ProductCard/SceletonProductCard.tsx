import React from 'react';
import ContentLoader from 'react-content-loader';

const SceletonProductCard = () => {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={460}
      viewBox="0 0 250 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      /* {...props} */
    >
      <circle cx="120" cy="120" r="120" />
      <rect x="0" y="317" rx="10" ry="10" width="240" height="88" />
      <rect x="0" y="252" rx="10" ry="10" width="240" height="48" />
      <rect x="4" y="420" rx="10" ry="10" width="70" height="32" />
      <rect x="134" y="420" rx="20" ry="20" width="110" height="32" />
    </ContentLoader>
  );
};

export default SceletonProductCard;
