import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import usersData from '../data/Users.json';

export default function UsersList({ setNavTitle }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
      setNavTitle('User Dashboard'); // default title
    }, 500);
  }, [setNavTitle]);

  if (loading) return <p className="loading-text">Loading users...</p>;

  return (
    <div className="users-grid">
      {users.map(user => (
        <UserCard key={user.id} user={user} setNavTitle={setNavTitle} />
      ))}
    </div>
  );
}
