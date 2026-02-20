import React from 'react';

const Filter = ({ searchFilter, setSearchFilter }) => {
  return (
    <div>
      <label>Search: </label>
      <input
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        placeholder="Search by name..."
      />
    </div>
  );
};

export default Filter;
