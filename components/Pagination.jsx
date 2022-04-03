import PaginationStyles from "../styles/Pagination.module.css";

export const Pagination = () => {
  const ps = PaginationStyles;
  const page = 5;
  const paginate = page >= 5 ? [1, 2, 3, 4, 5] : [6, 7, 8, 9, 10];
  return (
    <>
      <div className={ps.paginationContainer}>
        <ul>
          <li>
            <a href="#">{"<"}</a>
          </li>
          {page >= 5 ? null : (
            <>
              <li>
                <a href="#">1</a>
              </li>
              <li>...</li>
            </>
          )}
          {paginate.map((num) => {
            return (
              <li key={num}>
                <a href="#">{num}</a>
              </li>
            );
          })}
          {page <= 4 ? null : (
            <>
              <li>...</li>
              <li>
                <a href="#">44</a>
              </li>
            </>
          )}
          <li style={{ color: "var(--color-primary)" }}>
            <a href="#">{">"}</a>
          </li>
        </ul>
      </div>
    </>
  );
};
