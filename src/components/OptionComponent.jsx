import React from "react";

export default function OptionComponent({
  option,
  onChange,
  value,
  isDisabled = false,
}) {
  return (
    <div className="relative w-full">
      <select
        disabled={isDisabled}
        onChange={onChange}
        value={value}
        id="userRole"
        className="disabled:bg-gray-300 w-full block rounded-md px-4 py-3 max-w-7xl bg-white"
      >
        {option.map((el) => (
          <option
          label={el.label}
            disabled={el.option === "admin" ? true : false}
            key={el.id}
            value={el.option}
          >
            {el.option}
          </option>
        ))}
      </select>
    </div>
  );
}
