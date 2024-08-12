import React from 'react';
import './Sidebar.css';
import { NavLink, Outlet } from 'react-router-dom';

// This is a component containing the sidebar, with navigatable links

function Sidebar({ user }) {
  return (
    <div className="sidebar">
    
      <div className="logo">Logo/ Bank Name</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/budget">
              Budget
            </NavLink>
          </li>
          <li>
            <NavLink to="/transfer">
              Transfer
            </NavLink>
          </li>
          {user?.role === 'admin' && (
            <li>
            
              <NavLink to="admin">Administrator</NavLink>
              
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </div >
  );
}

export default Sidebar;