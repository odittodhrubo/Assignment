import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a 
            className="page-link" 
            href="#previous" 
            onClick={(e) => { e.preventDefault(); paginate(currentPage > 1 ? currentPage - 1 : 1); }}
          >
            Previous
          </a>
        </li>
        
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <a 
              className="page-link" 
              href={`#${number}`}
              onClick={(e) => { e.preventDefault(); paginate(number); }}
            >
              {number}
            </a>
          </li>
        ))}
        
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <a 
            className="page-link" 
            href="#next" 
            onClick={(e) => { e.preventDefault(); paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage); }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;