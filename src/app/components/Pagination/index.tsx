'use client'
import React from "react";
import { I_PAGINATION } from '@/utils';

const Pagination = ({ currentPage, totalPages, onPageChange }: I_PAGINATION) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="flex justify-center items-center mt-4">
      { currentPage !== 1 && (
        <button
          className="bg-transparent border border-solid border-stone rounded px-2 py-1 mr-1 cursor-pointer hover:bg-sky-950 text-black hover:text-white transition-all duration-500 ease-in-out"
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>
      )}
      {pageNumbers.map((page) => (
        <div
          className={`inline-block px-2 py-1 mx-1 border border-solid border-lightgray rounded cursor-pointer
          ${currentPage === page ? 'pointer-events-none bg-sky-950 text-white' : 'pointer-events-auto cursor-pointer bg-transparent text-black'}
          hover:text-white hover:bg-sky-950
          `}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </div>
      ))}
      { currentPage !== totalPages && (
        <button
          className="bg-transparent border border-solid border-stone rounded px-2 py-1 mr-1 cursor-pointer hover:bg-sky-950 text-black hover:text-white transition-all duration-500 ease-in-out"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;