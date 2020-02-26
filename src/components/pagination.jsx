// pagination.jsx
import React from "react";

export default function Pagination({reposPerPage, totalRepos, paginate, activePage}) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++){
      pageNumbers.push(i);
  }

  return (
    <div className="pagination">
        
      {pageNumbers.map(number => (
          <span id="pagiantionClick" key={number} onClick={() => paginate(number)}>
              {number}
          </span>
      ))}
        
    </div>
  );
};