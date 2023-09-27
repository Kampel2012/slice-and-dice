import { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

function useWindowSize(delay: number) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const debounceResize = useDebounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, delay);

  useEffect(() => {
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, [debounceResize]);

  return windowSize;
}

export default useWindowSize;
