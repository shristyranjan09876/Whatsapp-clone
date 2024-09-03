import React from 'react';

const Navbar = ({ username = 'User', userImage = 'src/assets/avt.png' }) => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={userImage} alt="User Avatar" className="userImage" />
        <span className="username">{username}</span>
      </div>
    </div>
  );
};

export default Navbar;
