import React from 'react';
import { Router, Route, NavLink } from 'react-router-dom';
import Trading from '../Trading/Trading';
import History from '../History/History';
import './MainPanel.css';

function MainPanel() {
  
  return (
    <div className="main-panel-container">
        <Router>
      <div className="main-panel-links">
      <NavLink
        to="/trading"
        className="menu-button"
        activeClassName="-active"
      >
        <div className="menu-title">Traiding</div>
      </NavLink>
      <NavLink
        to="/history"
        className="menu-button"
        activeClassName="-active"
      >
        <div className="menu-title">History</div>
      </NavLink>
      </div>
      <Route exact path="/trading">
        <Trading />
      </Route>
      <Route path="/history">
        <History />
      </Route>
        </Router>
    </div>
  );
}

export default MainPanel;
