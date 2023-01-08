import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ setChange }) => {
  const [city, setCity] = useState("");

  const inputHandler = (e) => {
    if (e.target.value != "") {
      setCity(e.target.value);
    }
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    setChange(city);
  };
  return (
    <form
      className="flex gap-4 border rounded-md p-2 items-center"
      onSubmit={inputSubmit}
    >
      <input
        value={city}
        placeholder="Search a city weather"
        onChange={inputHandler}
        className="px-2 py-1 rounded"
      />
      <button>
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBar;
