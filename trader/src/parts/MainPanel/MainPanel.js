import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Trading from '../Trading/Trading';
import History from '../History/History';
import {
  ErrorComponent,
  LoadingComponent,
} from '../ProcessMessages/ProcessMessages';
import { addStocksData } from '../../actions/stocksDataActions';
import './MainPanel.css';

function MainPanel() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [apiData, setApiData] = useState ([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getApiData = async () => {
      const URL = process.env.REACT_APP_API_URL;

      try {
        const response = await fetch(URL);
        const responseBody = await response.json();

        if (response.status !== 200) {
          throw Error(responseBody);
        }
        setApiData(responseBody);
        dispatch(addStocksData(apiData));

        setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsErrorOccured(true);
      }
    };
    getApiData();
    console.log(apiData);
  }, [isLoaded]);

  return isErrorOccured ? (
    <ErrorComponent />
  ) : isLoaded ? (
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
  ) : (
    <LoadingComponent />
  );
}

export default MainPanel;
