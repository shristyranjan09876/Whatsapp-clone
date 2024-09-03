import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chatlist = ({ onSelectChat, activeChatId,searchQuery }) => {
  console.log("active-chat",activeChatId)
  const chats = [
    { id: 1, name: 'Riya', message: 'Hello!', time: '10:00 PM', img: 'src/assets/avt.png' },
    { id: 2, name: 'Siya', message: 'How are you?', time: '09:45 AM', img: 'src/assets/avt2.jpeg' },
    { id: 3, name: 'Tiya', message: 'Hello!', time: '10:00 AM', img: 'src/assets/av1.png' },
    { id: 4, name: 'Miya', message: 'How are you?', time: '08:00 AM', img: 'src/assets/av2.png' },
  ];

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="chat-list">
      {filteredChats.map(chat => (
        <div
          key={chat.id}
          className={`chat-item d-flex justify-content-between align-items-center ${
            chat.id === activeChatId ? 'active-chat' : ''
          }`}
          onClick={() => onSelectChat(chat)}
        >
          <div className="d-flex align-items-center">
            <img
              src={chat.img}
              alt="Avatar"
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
            <div>
              <h6 className="m-0">{chat.name}</h6>
              <p className="mb-0 text-muted">{chat.message}</p>
            </div>
          </div>
          <small className="text-muted">{chat.time}</small>
        </div>
      ))}
    </div>
  );
};

export default Chatlist;
