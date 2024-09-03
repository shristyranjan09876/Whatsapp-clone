import React, { useState } from 'react';
import Searchbar from './Searchbar';

const ParentComponent = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Riya' },
    { id: 2, name: 'Siya' },
    { id: 3, name: 'Tiya' },
    { id: 4, name: 'Miya' },
  ]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (query) => {
    setFilteredUsers(
      users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
