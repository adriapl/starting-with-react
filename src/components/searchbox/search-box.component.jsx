import React from "react";

export const SearchBox = ({ placeholder, handleChance }) => {
  return (
    <input type="search" placeholder={placeholder} onChange={handleChance} />
  );
};
