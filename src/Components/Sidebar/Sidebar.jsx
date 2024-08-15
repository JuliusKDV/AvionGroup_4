import React, { useEffect } from 'react';
import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPiggyBank, faMoneyBillTransfer, faUserTie, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
            <NavLink to="/dashboard"><FontAwesomeIcon icon={faHouseUser} className='side-icon'/> Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/budget"><FontAwesomeIcon icon={faPiggyBank} className="side-icon"/>Budget</NavLink>
          </li>
          <li>
            <NavLink to="/transfer"><FontAwesomeIcon icon={faMoneyBillTransfer} className="side-icon" /> Transfer</NavLink>
          </li>
          {user?.role === 'admin' && (
            <li>
              <NavLink to="/admin"> <FontAwesomeIcon icon={faUserTie} className="side-icon" />Administrator</NavLink>
            </li>
          )}
          <li>
            <a href="/" onClick={handleLogout} className="logout-link">
            <FontAwesomeIcon icon={faRightFromBracket} className="side-icon" /> Logout
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Sidebar;
