import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({
  currPage,
  onPageChange,
  nextPageText = "Next",
  prePageText = "Prev",
  firstPageText = "First",
  lastPageText = "Last",
}) => {
  const { products, totalPages } = useSelector((state) => state.Products);

  if (products.length === 0 || totalPages <= 1) return null;

  const getPageNumber = () => {
    const pageNumbers = [];
    const pageWindow = 2;
    for (
      let i = Math.max(1, currPage - pageWindow);
      i <= Math.min(totalPages, currPage + pageWindow);
      i++
    ) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const btnBase =
    "inline-flex min-w-[2.25rem] items-center justify-center rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-primary-500 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="my-8 flex flex-wrap items-center justify-center gap-2 px-4">
      {currPage > 1 && (
        <>
          <button
            className={`${btnBase} bg-surface-subtle`}
            onClick={() => onPageChange(1)}
          >
            {firstPageText}
          </button>
          <button
            className={`${btnBase} bg-surface-subtle`}
            onClick={() => onPageChange(currPage - 1)}
          >
            {prePageText}
          </button>
        </>
      )}

      {getPageNumber().map((number) => (
        <button
          key={number}
          className={`${btnBase} ${
            currPage === number
              ? "border-primary-600 bg-primary-600 text-white hover:border-primary-700 hover:bg-primary-700 hover:text-white"
              : ""
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      {currPage < totalPages && (
        <>
          <button
            className={`${btnBase} bg-surface-subtle`}
            onClick={() => onPageChange(currPage + 1)}
          >
            {nextPageText}
          </button>
          <button
            className={`${btnBase} bg-surface-subtle`}
            onClick={() => onPageChange(totalPages)}
          >
            {lastPageText}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
