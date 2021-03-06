import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ErrorComponent,
  LoadingComponent,
} from '../ProcessMessages/ProcessMessages';
import { addStocksData } from '../../actions/stocksDataActions';
import StockChart from '../StockChart/StockChart';
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
      <div className="stocks-info">
        <p>Google {prices.GOOG}</p>
        <StockChart company="GOOG" />
      </div>
      <div className="stocks-info">
        <p>Microsoft {prices.MSFT}</p>
        <StockChart company="MSFT" />
      </div>
      <div className="stocks-info">
        <p>Twitter {prices.TWTR}</p>
        <StockChart company="TWTR" />
      </div>
      <div className="stocks-info">
        <p>Facebook {prices.FB}</p>
        <StockChart company="FB" />
      </div>
    </div>
  ) : (
    <LoadingComponent />
  );
}

export default Trading;
