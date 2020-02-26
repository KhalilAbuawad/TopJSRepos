// table.jsx

import React, {useState} from "react";
import Pagination from "./pagination.jsx";

const getRows = (table, entriesPerPage, activePage) => {
  if(table.items === undefined)
    return

  let array = table.items;
  
  let offsetStart = 0;
  if(activePage > 1)
    offsetStart = ((activePage - 1) * entriesPerPage)
  let offsetEnd = (activePage * entriesPerPage)

  /*.filter(this.searchQuery) for installetion of searchquery*/  /* onContextMenu={(event) => {event.preventDefault(); this.props.onContextMenu(pattern.uuid, pattern.internal_revision_id);}} for going to repo*/
  const rows = array.slice(offsetStart, offsetEnd).map((repo) => (  
    <tr key={repo.id}>
      <td>{repo.description}</td>
      <td>{repo.name}</td>
      <td>{repo.watchers}</td>
      <td>{repo.created_at.trim().split('T')[0]}</td>
    </tr>
  ))

  return rows;
}

export default function Table(table) {
  const [activePage, setactivePage] = useState(1);

  let entriesPerPage = 20;

  //change page
  const paginate = numberSelected => setactivePage(numberSelected)

  return (
    <div className="tableContainer">
      <table >
        <thead>
          <tr>
              <th>
                Description
              </th>
              <th>
                Name
              </th>
              <th>
                Watchers
              </th>
              <th>
                Creation date
              </th>
          </tr>
        </thead>
        <tbody>
            {getRows(table, entriesPerPage, activePage)}
        </tbody>
      </table>  
      <Pagination reposPerPage={entriesPerPage} totalRepos={100} paginate={paginate}/>
    </div>
    
    
  );
  };