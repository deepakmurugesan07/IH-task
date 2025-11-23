import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ title }) {
  const [name, rest] = title.split(' ') || [title, ''];

  return (
    <nav className="navbar">
      <h1>
        <span className="navbar-name">{name}</span> {rest}
      </h1>
      <Link to="/">Home</Link>
    </nav>
  );
}
