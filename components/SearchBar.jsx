import Image from "next/image";
import React, { useState } from "react";
import Search from "../assets/img/search.png";
import SearchBarStyles from "../styles/SearchBar.module.css";
import FilterResults from "./FilterResults";

export const SearchBar = () => {
  const sbs = SearchBarStyles;
  const [filter, setFilter] = useState(false);

  return (
    <>
      {filter ? <FilterResults setFilter={setFilter} /> : null}
      <div className={sbs.searchBarContainer}>
        <div className={sbs.searchBar}>
          <div className={sbs.img}>
            <Image src={Search} alt="search bar" />
          </div>
          <input
            type="text"
            placeholder="Search for job title or company name"
          />
        </div>
        <div className={sbs.filterResult}>
          <button onClick={() => setFilter(true)}>Filter results</button>
        </div>
      </div>
    </>
  );
};
