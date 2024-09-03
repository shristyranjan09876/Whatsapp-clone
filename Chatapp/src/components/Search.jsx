import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" /> <SearchIcon style={{fill:'white'}}/> 
      </div>
      <div className="userChat">
        <img src="src/assets/avt.png" alt="User Avatar" />
        <div className="userChatInfo">
          <span>Shai</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
