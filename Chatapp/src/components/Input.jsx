import React, { useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';


const Input = () => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      console.log('Message sent:', text);
      setText(''); 
    }
  };

  return (
    <div className='input'>
      <input
        type='text'
        placeholder='Type something...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className='send'>
        <AttachFileIcon />
        <input type='file' style={{ display: 'none' }} id='file' />
        <label htmlFor='file'>
          <ImageIcon />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
