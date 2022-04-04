import PaginationStyles from "../styles/Pagination.module.css";
import { useState } from 'react';

export const Pagination = () => {
  const ps = PaginationStyles;

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const [currentPage, setCurrentPage] = useState(1)
  const lastPage = currentPage + 3
  const firstPage = lastPage - 4

  const sliceStart = currentPage >= arr.length - 4 ? arr.length - 5 : firstPage
  const sliceEnd = currentPage >= arr.length - 4 ? arr.length - 1 : lastPage + 1

  return (
    <>
      <div className={ps.paginationContainer}>
        <ul>

          <li >
            <a href="#">{"<"}</a>
          </li>

          {[arr[0], "..."].map((value) => {
            return currentPage >= 3
              ? <li key={value}>
                <a href="#">{value}</a>
              </li>
              : null
          })}

          {arr.slice(sliceStart, sliceEnd).map((num) => {

            return <li key={Math.random()}>
              <a href="#">{num}</a>
            </li>


          })}

          {["...", arr.length + 1].map((value) => {
            return currentPage <= arr.length - 6
              ? value === "..." ? <li key={value}>
                <a href="#">{value}</a>
              </li> : <li key={value}>
                <a href="#">{value - 1}</a>
              </li>
              : value === "..." ? null : <li key={value}>
                <a href="#">{value - 1}</a>
              </li>
          })}

          <li>
            <a href="#">{">"}</a>
          </li>


        </ul>
      </div>
    </>
  );
};
