import { useState, useEffect, useCallback } from 'react';

function useWindowSize(delay) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceResize = useCallback(
    debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 300),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, [debounceResize]);

  return windowSize;
}

function debounce(func, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export default useWindowSize;
