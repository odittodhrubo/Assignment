import React from 'react';
import { Pagination as BSPagination } from 'react-bootstrap';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <BSPagination className="justify-content-center">
      <BSPagination.Prev 
        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
        disabled={currentPage === 1}
      />
      
      {pageNumbers.map(number => (
        <BSPagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </BSPagination.Item>
      ))}
      
      <BSPagination.Next 
        onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
        disabled={currentPage === pageNumbers.length}
      />
    </BSPagination>
  );
};

export default Pagination;