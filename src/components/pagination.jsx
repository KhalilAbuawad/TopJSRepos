// pagination.jsx
import React from "react";

export default function Pagination({reposPerPage, totalRepos, paginate}) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++){
      pageNumbers.push(i);
  }

  return (
    <div className="pagination">
        
      {pageNumbers.map(number => (
          <span key={number}>
              <a href='!#' onClick={() => paginate(number)}>{number}</a>
          </span>
      ))}
        
    </div>
  );
};