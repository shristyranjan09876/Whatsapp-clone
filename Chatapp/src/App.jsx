import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import ChatWindow from './component/Chatwindow';
import './style.css';

function App() {
  const [activeChat, setActiveChat] = useState(null);

  const handleSelectChat = (chat) => {
    console.log('Selected chat:', chat);
    setActiveChat(chat);
  };

  return (
    <div className="app d-flex">
      <Sidebar onSelectChat={handleSelectChat} activeChatId={activeChat?.id} />
      <ChatWindow activeChat={activeChat} />
    </div>
  );
}

export default App;
