import React from 'react';
import './Layout.css';

import Sidebar from '../components/Sidebar/Sidebar.jsx';

// This is a layout containing the sidebar and space for main content. 

export default function Layout({ user, children }) {
  return (
    <div className="page">
      {/* Attaching all file components */}
      <Sidebar user={user} />

      <div className="main-content">
        {children}
      </div>
    </div>
  );
}