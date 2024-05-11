// src/components/Sidebar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMoviesByCategory } from '../redux/movieActions';
import './SideBar.css';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(fetchMoviesByCategory(category));
  };

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to="/" onClick={() => handleCategoryClick('popular')}>
            Popular
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleCategoryClick('top_rated')}>
            Top Rated
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleCategoryClick('upcoming')}>
            Upcoming
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;