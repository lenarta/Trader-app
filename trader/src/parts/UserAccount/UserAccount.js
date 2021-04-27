import React from 'react';
import { useSelector } from 'react-redux';

import './UserAccount.css';

const UserAccount = () => {
  const prices = useSelector((state) => state.trading.prices);
  const ticker = 'GOOG';

  const Position = () => {
    return (
      <table className="tableHeader">
        <tbody>
          <tr>
            <th>tracker</th>
            <th>qty</th>
            <th>open price</th>
            <th>current price</th>
            <th>P/L</th>
            <th>trade</th>
          </tr>
        </tbody>
      </table>
    );
  };

  const Papers = () => {
    return (
      <table>
        <tbody>
          <tr className="positions">
            <td>{ticker}</td>
            <td>100</td>
            <td>1120</td>
            <td>{prices[ticker]}</td>
            <td>+30</td>
            <td>
              <button>close</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="accountContainer">
      <div className="userAccount">
        <Position />
        <Papers />
        <Papers />
        <Papers />

        <div className="userData">
          <p>balance: 5000</p>
          <p>equity: 5150</p>
          <p>current P/L: 150</p>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
