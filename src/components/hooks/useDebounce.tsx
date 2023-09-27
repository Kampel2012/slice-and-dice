import { useCallback } from 'react';

type Options = string[] | string;

const useDebounce = (
  func: (...args: any) => void,
  delay: number,
  options: Options = ''
) => {
  function debounce(func: () => void, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return function (this: any) {
      const context = this;
      const args: any = arguments;

      clearTimeout(timer);

      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(debounce(func, delay), [...options]);
};

export default useDebounce;
