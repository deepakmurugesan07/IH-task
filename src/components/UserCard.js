import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserCard({ user, setNavTitle }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setNavTitle(`${user.name} Dashboard`); // Dynamic navbar title
    navigate(`/user/${user.id}`);
  };

  return (
    <div className="user-card" onClick={handleClick}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}
