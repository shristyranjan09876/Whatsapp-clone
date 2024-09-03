import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="home">
      <div className="container">
        <Sidebar onSelectChat={handleSelectChat} />
        <Chat activeChat={selectedChat} />
      </div>
    </div>
  );
};

export default App;
