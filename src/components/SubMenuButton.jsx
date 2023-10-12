import React from "react";

export default function SubMenuButton({ children }) {
  return (
    <button
      className="bg-hardgray rounded-lg text-2xl text-white w-full hover:bg-black font-semibold"
    >
      {children}
    </button>
  );
}
