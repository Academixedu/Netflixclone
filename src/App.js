// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <div className="main-content">
            <Sidebar />
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;