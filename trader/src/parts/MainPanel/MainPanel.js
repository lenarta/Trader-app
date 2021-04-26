import React from 'react';
import { Route, Link } from 'react-router-dom';
import Trading from '../Trading/Trading';
import History from '../History/History';
import './MainPanel.css';

function MainPanel() {
  return (
    <div className="main-panel">
      <div className="leaderboardLinks">
        <Link to="/trading" label="Traiding" />
        <Link to="/history" label="History" />
      </div>
      <Route path="/trading">
        <Trading />
      </Route>
      <Route path="/history">
        <History />
      </Route>
    </div>
  );
}

export default MainPanel;
