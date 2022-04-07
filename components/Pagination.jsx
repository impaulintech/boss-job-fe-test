import PaginationStyles from "../styles/Pagination.module.css";
import { useState } from 'react';

export const Pagination = () => {
  const ps = PaginationStyles;

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 220];

  const [currentPage, setCurrentPage] = useState(1)
  const lastPage = currentPage + 3
  const firstPage = lastPage - 4

  const sliceStart = currentPage >= arr.length - 4 ? arr.length - 5 : firstPage
  const sliceEnd = currentPage >= arr.length - 4 ? arr.length - 1 : lastPage + 1

  console.log(currentPage);

  return (
    <>
      <div className={ps.paginationContainer}>
        <ul>

          <li onClick={() => { setCurrentPage(currentPage - 1) }}>
            <a href="#">{"<"}</a>
          </li>

          {[arr[0], "..."].map((value) => {
            return currentPage >= 3
              ? value === "..."
                ? <li key={value}>
                  {value}
                </li>
                : <li
                  key={value}
                  onClick={() => { setCurrentPage(value) }}>
                  <a href="#">{value}</a>
                </li>
              : null
          })}

          {arr.slice(sliceStart, sliceEnd).map((num) => {
            return (
              <li
                key={Math.random()}
                onClick={() => { setCurrentPage(num) }}>
                <a href="#">{num}</a>
              </li>
            )
          })}

          {["...", arr[arr.length - 1]].map((value) => {
            return currentPage <= arr.length - 6
              ? value === "..."
                ? <li key={value}>
                  {value}
                </li>
                : <li
                  key={value}
                  onClick={() => { setCurrentPage(value) }}>
                  <a href="#">{value}</a>
                </li>
              : value === "..."
                ? null
                : <li
                  key={value}
                  onClick={() => { setCurrentPage(value) }}>
                  <a href="#">{value}</a>
                </li>
          })}

          <li>
            <a href="#" onClick={() => { setCurrentPage(currentPage + 1) }}>{">"}</a>
          </li>


        </ul>
      </div>
    </>
  );
};
