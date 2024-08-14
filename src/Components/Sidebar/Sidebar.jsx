import React, { useEffect } from 'react';
import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Sidebar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');

    // Navigate to the login page
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="logo">Logo/Bank Name</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/budget">Budget</NavLink>
          </li>
          <li>
            <NavLink to="/transfer">Transfer</NavLink>
          </li>
          {user?.role === 'admin' && (
            <li>
              <NavLink to="/admin">Administrator</NavLink>
            </li>
          )}
          <li>
            <a href="/" onClick={handleLogout} className="logout-link">
              Logout
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Sidebar;
