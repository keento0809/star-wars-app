import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center py-1 text-blue-400 font-bold">
      <select name="" id="" defaultValue="japanese">
        <option value="japanese">JPN</option>
        <option value="english">ENG</option>
      </select>
      <p className="text-xs py-2">K.H all rights are reserved</p>
    </footer>
  );
};
