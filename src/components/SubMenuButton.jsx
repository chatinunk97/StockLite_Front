import React from "react";

export default function SubMenuButton({ children }) {
  return (
    <button
      className="bg-hardgray p-4 rounded-lg text-white"
    >
      {children}
    </button>
  );
}
