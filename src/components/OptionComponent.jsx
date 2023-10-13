import React from "react";

export default function OptionComponent({ option , onChange,value }) {
  return (
    <div className="relative w-full">
      <select
      onChange={onChange}
      value={value}
        id="userRole"
        className="w-full block rounded-md px-4 py-3 max-w-7xl bg-white"
      >
        {option.map((el) => (
          <option key={el.id} value={el.option}>{el.option}</option>
        ))}
      </select>
    </div>
  );
}
