import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  ErrorComponent,
  LoadingComponent,
} from '../ProcessMessages/ProcessMessages';
import { addStocksData } from '../../actions/stocksDataActions';
import './Trading.css';

function Trading() {
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
        setIsLoaded(true);
        dispatch(addStocksData(apiData));

      } catch (error) {
        console.log(error);
        setIsErrorOccured(true);
      }
    };
    getApiData();
  }, [isLoaded]);

  return isErrorOccured ? (
    <ErrorComponent />
  ) : isLoaded ? (
    <div className="trading-container">
      <h1>Google {apiData[0].lastSalePrice}</h1>
      <h1>Microsoft {apiData[1].lastSalePrice}</h1>
      <h1>Twitter {apiData[2].lastSalePrice}</h1>
      <h1>Facebook {apiData[3].lastSalePrice}</h1>
    </div>
  ) : (
    <LoadingComponent />
  );
}

export default Trading;
