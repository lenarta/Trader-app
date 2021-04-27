import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Trading from '../Trading/Trading';
import History from '../History/History';
import './MainPanel.css';

function MainPanel() {

  return (
    <div className="main-panel-container">
      <div className="main-panel-links">
        <NavLink to="/main/trading" className="main-panel-link" activeClassName="selected">Trading</NavLink>
        <NavLink to="/main/history" className="main-panel-link" activeClassName="selected">History</NavLink>
      </div>
      <Route exact path="/main/trading">
        <Trading />
      </Route>
      <Route path="/main/history">
        <History />
      </Route>
    </div>
  );
}

export default MainPanel;
