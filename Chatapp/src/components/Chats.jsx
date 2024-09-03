import React from 'react';

const Chats = ({ onSelectChat }) => {
  const chatData = [
    { username: 'Riya', lastMessage: 'Hello👋', userImage: 'src/assets/avt.png' },
    { username: 'Niru', lastMessage: 'Hey there! 😊 ', userImage: 'src/assets/avt.png' },
    { username: 'Pari', lastMessage: 'Good morning 🖼️', userImage: 'src/assets/avt.png' },
    { username: 'Shri', lastMessage: 'Good morning', userImage: 'src/assets/avt.png' },
  ];

  const handleChatClick = (chat) => {
    onSelectChat(chat);
  };

  return (
    <div className="chats">
      {chatData.map((chat, index) => (
        <div key={index} className="userChat" onClick={() => handleChatClick(chat)}>
          <img src={chat.userImage} alt={`${chat.username}'s Avatar`} />
          <div className="userChatInfo">
            <span>{chat.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
