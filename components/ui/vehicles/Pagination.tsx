import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 0) return null;

  return (
    <div className="join">
      {Array.from({ length: totalPages }, (_, idx) => (
        <input
          key={idx + 1}
          className="join-item btn btn-square bg-base-200"
          type="radio"
          name="options"
          aria-label={(idx + 1).toString()}
          checked={currentPage === idx + 1}
          onChange={() => onPageChange(idx + 1)}
        />
      ))}
    </div>
  );
};

export default Pagination;
