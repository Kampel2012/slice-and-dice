import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(1);
  const min = 1;
  const max = 10;

  function increase(params) {
    applyCurrent(count + 1);
  }

  function decrease(params) {
    applyCurrent(count - 1);
  }

  function applyCurrent(num) {
    let validNum = Math.max(min, Math.min(max, num));
    setCount(validNum);
  }

  return (
    <div className="flex gap-x-1 flex-wrap">
      <button
        className="px-2 rounded-full border-2 border-orange-600 self-center font-bold text-orange-600"
        type="button"
        onClick={decrease}
      >
        -
      </button>
      <span className="self-center text-xl font-bold w-6  text-center">
        {count}
      </span>
      <button
        className="px-2 rounded-full border-2 border-orange-600 self-center font-bold text-orange-600"
        type="button"
        onClick={increase}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
