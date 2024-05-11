// components/Navbar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/movieActions';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchQuery));
  };

  return (
    <nav className="navbar">
      <div className="logo">Movie Website</div>
      <div className="header">Home</div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <button className="login-button">Login</button>
    </nav>
  );
};

export default Navbar;