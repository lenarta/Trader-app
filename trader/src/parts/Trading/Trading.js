import React from 'react';
import { useSelector } from 'react-redux';
import './Trading.css';

function Trading() {
  const googleSalePrice = useSelector(state => state.trading.stocks[0].lastSalePrice);
  const microsoftSalePrice = useSelector(state => state.trading.stocks[1].lastSalePrice);
  const twitterSalePrice = useSelector(state => state.trading.stocks[2].lastSalePrice);
  const facebookSalePrice = useSelector(state => state.trading.stocks[3].lastSalePrice);

  return (
    <div className="trading-container">
      <h1>Google {googleSalePrice}</h1>
      <h1>Microsoft {microsoftSalePrice}</h1>
      <h1>Twitter {twitterSalePrice}</h1>
      <h1>Facebook {facebookSalePrice}</h1>
    </div>
  );
}

export default Trading;
