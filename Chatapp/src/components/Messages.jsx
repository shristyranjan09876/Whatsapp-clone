import React from 'react';
import Message from './Message'

const Messages = () => {
  const messages = [
    { id: 1, text: 'Hello', sender: 'Jane', time: 'Just Now', img: 'src/assets/avt.png' },
    { id: 2, text: 'Hi, How are you?', sender: 'You', time: 'Just Now', img: 'src/assets/avt.png', owner: true },
  ];

  return (
    <div className='messages'>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default Messages;
