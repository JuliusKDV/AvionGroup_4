import React from 'react';
import './Sidebar.css'; 

// This is a component containing the sidebar, with navigatable links

function Sidebar({ user }) {
  return (
    <div className="sidebar">
      <div className="logo">Logo/ Bank Name</div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a href="/budget">
              <i className="fas fa-wallet"></i> Budget App
            </a>
          </li>
          <li>
            <a href="/transfer">
              <i className="fas fa-exchange-alt"></i> Transfer
            </a>
          </li>
          {user.role === 'admin' && (
            <li>
              <a href="/admin">
                <i className="fas fa-user-shield"></i> Administrator
              </a>
            </li>
          )}
          <li>
            <a href="/logout">
              <i className="fas fa-sign-out-alt"></i> Log-out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
