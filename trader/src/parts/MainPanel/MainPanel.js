import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import Trading from '../Trading/Trading';
import History from '../History/History';
import './MainPanel.css';

function MainPanel() {
  const LeaderboardLink = ({ label, to, activeOnlyWhenExact }) => {
    const match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact,
    });

    return (
      <div className={match ? 'active' : 'inactive'}>
        {match && ''}
        <Link to={to}>{label}</Link>
      </div>
    );
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboardLinks">
        <LeaderboardLink to="/trading" label="Trading" />
        <LeaderboardLink to="/history" label="History" />
      </div>
      <Route exact path="/trading">
        <Trading />
      </Route>
      <Route path="/history">
        <History />
      </Route>
    </div>
  );
}

export default MainPanel;
