import React from 'react';

const Message = ({ message }) => {
  const { text, img, time, owner } = message;

  return (
    <div className={`message ${owner ? 'owner' : ''}`}>
      <div className='messageInfo'>
        <img src={img} alt='avatar' />
        <span>{time}</span>
      </div>
      <div className='messageContent'>
        <p>{text}</p>
        {img && <img src={img} alt='attached' />}
      </div>
    </div>
  );
};

export default Message;
