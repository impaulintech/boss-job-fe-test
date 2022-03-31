import Image from "next/image";
import React from "react";
import Search from "../img/search.png";
import SearchBarStyles from "../styles/SearchBar.module.css";

export const SearchBar = () => {
  const sbs = SearchBarStyles;
  return (
    <>
      <div className={sbs.search_bar_container}>
        <div className={sbs.search_bar}>
          <div className={sbs.img}>
            <Image src={Search} alt="search bar" />
          </div>
          <input
            type="text"
            placeholder="Search for job title or company name"
          />
        </div>
        <div className={sbs.filter_result}>
          <button>Filter results</button>
        </div>
      </div>
    </>
  );
};
