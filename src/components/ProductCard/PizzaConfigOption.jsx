import React from 'react';

const PizzaConfigOption = ({
  size,
  onChange,
  value,
  isActive,
  name,
  text,
  isDisable,
}) => {
  const defaultStyles =
    'text-center py-2 text-sm font-bold rounded-md transition cursor-pointer ';

  const activeStyles = defaultStyles + 'shadow bg-white';

  const disableStyles = defaultStyles + 'text-gray-500 opacity-20';

  return (
    <label
      className={
        isDisable ? disableStyles : isActive ? activeStyles : defaultStyles
      }
    >
      <input
        type="radio"
        name={name}
        className="hidden "
        value={value}
        onChange={onChange}
        disabled={isDisable}
      />
      {size && <span>{size} см.</span>}
      {text && <span>{text}</span>}
    </label>
  );
};

export default PizzaConfigOption;
