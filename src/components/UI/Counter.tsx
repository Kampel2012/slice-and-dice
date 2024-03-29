import { FC } from 'react';

interface CounterProps {
  count: number;
  decrease: (count: number) => void;
  increase: (count: number) => void;
}

const Counter: FC<CounterProps> = ({ count, decrease, increase }) => {
  const min = 0;
  const max = 99;

  function increased() {
    increase(applyCurrent(count + 1));
  }

  function decreased() {
    decrease(applyCurrent(count - 1));
  }

  function applyCurrent(num: number) {
    let validNum = Math.max(min, Math.min(max, num));
    return validNum;
  }

  return (
    <div className="flex gap-x-1 flex-wrap">
      <button
        className="px-2 rounded-full border-2 border-orange-600 self-center font-bold text-orange-600"
        type="button"
        onClick={decreased}>
        -
      </button>
      <span className="self-center text-xl font-bold w-6  text-center">
        {count}
      </span>
      <button
        className="px-2 rounded-full border-2 border-orange-600 self-center font-bold text-orange-600"
        type="button"
        onClick={increased}>
        +
      </button>
    </div>
  );
};

export default Counter;
