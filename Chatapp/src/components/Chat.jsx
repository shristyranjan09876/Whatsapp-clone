import React, { useEffect, useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Messages from './Messages';
import Input from './Input';

const Chat = ({ activeChat }) => {
  const[chatId, setChatId] = useState(null);

useEffect(()=>{
  const storedChatId = localStorage.getItem('activeChatId');
  if (storedChatId) {
    setChatId(storedChatId);
  }
},[])

  if (!activeChat) {
    return <div className='chat'>Select a user to start chatting.</div>;
  }


  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{activeChat.username}</span>
        <div className='chatIcons'>
          <VideocamIcon />
          <PersonAddAltIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
