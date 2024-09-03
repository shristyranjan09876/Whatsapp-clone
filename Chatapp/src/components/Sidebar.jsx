import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = ({ onSelectChat }) => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats onSelectChat={onSelectChat} />
    </div>
  );
};

export default Sidebar;
