import React, { useState } from 'react';
import Useprofile from './Useprofile';
import Chatlist from './Chatlist';
import Searchbar from './Searchbar';

const Sidebar = ({ onSelectChat,activeChatId })  => {
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className='sidebar'>
      <Useprofile />
      <Searchbar onSearchChange={handleSearchChange} />
      <Chatlist onSelectChat={onSelectChat} activeChatId={activeChatId} searchQuery={searchQuery}  />
    </div>
  );
}

export default Sidebar;
