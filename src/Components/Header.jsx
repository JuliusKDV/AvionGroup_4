import React from 'react';
import DateTime from './DateTime'; //importing the automatic time and date
// This is a layout containing the sidebar and space for main content. 

export default function Header({ user, children }) {
  return (
    <div className="header">
      
    <div id="headertext">
      <h2> 
        {children} 
      </h2>
      </div>
    {/* <div className="timedisplay"><DateTime /></div> */}
  </div>
  );
}