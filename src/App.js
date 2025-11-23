import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsersList from './pages/UserList';
import UserDetail from './pages/UserDetail';

export default function App() {
  const [navTitle, setNavTitle] = useState('User Dashboard');

  return (
    <BrowserRouter>
      <Navbar title={navTitle} />
      <Routes>
        <Route path="/" element={<UsersList setNavTitle={setNavTitle} />} />
        <Route path="/user/:id" element={<UserDetail setNavTitle={setNavTitle} />} />
      </Routes>
    </BrowserRouter>
  );
}
