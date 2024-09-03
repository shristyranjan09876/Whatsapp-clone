import React, { useEffect, useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';

function ChatWindow({ activeChat }) {
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState({});
  const [currentMessages, setCurrentMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const storedChatId = localStorage.getItem('activeChatId');
    const storedMessages = localStorage.getItem('messages');

    if (storedChatId) {
      setChatId(storedChatId);
    }

    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    if (activeChat && activeChat.id !== chatId) {
      setChatId(activeChat.id);
      localStorage.setItem('activeChatId', activeChat.id);
    }
  }, [activeChat, chatId]);

  useEffect(() => {
    if (chatId) {
      setCurrentMessages(messages[chatId] || []);
    }
  }, [chatId, messages]);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: Date.now(),
      text: newMessage,
      sender: 'You',
    };

    setMessages(prevMessages => {
      const updatedMessages = {
        ...prevMessages,
        [chatId]: [...(prevMessages[chatId] || []), message]
      };
      localStorage.setItem('messages', JSON.stringify(updatedMessages));

      return updatedMessages;
    });

    setNewMessage('');

    setTimeout(() => {
      autoReply();
    }, 1000);
  };

  const autoReply = () => {
    const botReply = {
      id: Date.now(),
      text: 'Hii there! I am a bot. This is an automated reply!',
      sender: activeChat.name,
    };

    setMessages(prevMessages => {
      const updatedMessages = {
        ...prevMessages,
        [chatId]: [...(prevMessages[chatId] || []), botReply]
      };

      localStorage.setItem('messages', JSON.stringify(updatedMessages));

      return updatedMessages;
    });
  };

  if (!activeChat) {
    return <div className='chat'>Start chatting.</div>;
  }

  return (
    <div className="chat-window-container">
      <div className="chatwindowNav">
        <div className="chatwindowtop">
          <img
            src={activeChat.img}
            alt="Avatar"
            className="rounded-circle me-2"
            width="40"
            height="40"
          />
          <span style={{ color: 'white',  }}>{activeChat.name}</span>
          <div className='chatIcons'>
            <VideocamIcon />
            <PersonAddAltIcon />
            <MoreHorizIcon />
          </div>
        </div>
      </div>

      <div className="chat-window">
        <div className="messages p-3">
          {currentMessages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender === 'You' ? 'sent' : 'received'} p-2 mb-2`}>
              <p className="mb-0"><strong>{msg.sender}</strong>: {msg.text}</p>
            </div>
          ))}
        </div>
        <div className="message-input p-3 d-flex  style={{ flexShrink: 0 }}">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
          />
          <div className='send'>
            <AttachFileIcon />
            <input type='file' style={{ display: 'none' }} id='file'  accept="image/png, image/jpeg" />
            <label htmlFor='file'>
              <ImageIcon />
            </label>
          </div>
          <button className="btn btn-success rounded-pill" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
