import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Searchbar = ({ onSearchChange }) => {
  return (
    <div className="d-flex my-3">
      <input
        type="text"
        placeholder="Find a user"
        className="form-control p-2 shadow-sm"
        style={{  
          borderRadius: '20px',
          border: '1px solid #ccc',
        }}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
