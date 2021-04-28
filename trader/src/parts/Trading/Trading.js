import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ErrorComponent,
  LoadingComponent,
} from '../ProcessMessages/ProcessMessages';
import { addStocksData } from '../../actions/stocksDataActions';
import './Trading.css';

function Trading() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const prices = useSelector((state) => state.trading.prices);
  const dispatch = useDispatch();

  useEffect(() => {
    const getApiData = async () => {
      const URL = `https://cloud.iexapis.com/stable/tops?token=${process.env.REACT_APP_API_KEY}&symbols=goog,msft,twtr,fb`;
      try {
        const response = await fetch(URL);
        const responseBody = await response.json();

        if (response.status !== 200) {
          throw Error(responseBody);
        }
        setIsLoaded(true);
        dispatch(addStocksData(responseBody));
      } catch (error) {
        console.log(error);
        setIsErrorOccured(true);
      }
    };
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isErrorOccured ? (
    <ErrorComponent />
  ) : isLoaded ? (
    <div className="trading-container">
      <h1>Google {prices.GOOG}</h1>
      <h1>Microsoft {prices.MSFT}</h1>
      <h1>Twitter {prices.TWTR}</h1>
      <h1>Facebook {prices.FB}</h1>
    </div>
  ) : (
    <LoadingComponent />
  );
}

export default Trading;
