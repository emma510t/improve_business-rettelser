import React, { useState } from "react";

const CheckboxTile = ({ children, checked, onChange }) => {
  const handleCheckboxChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={children}
        checked={checked}
        onChange={handleCheckboxChange}
        className="peer h-0 w-0 opacity-0 focus:outline-none"
      />
      <label
        htmlFor={children}
        className="cursor-pointer border rounded-lg font-inter text-m border-ibsilver-600 font-normal px-2.5 py-1.5 transition-colors duration-250 ease-in-out bg-transparent peer-checked:bg-ibsilver-600 peer-checked:text-ibsilver-100 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 ring-ibsilver-600"
      >
        {children}
      </label>
    </div>
  );
};

export default CheckboxTile;
