import React from 'react';
import { useSelector } from 'react-redux';
import 'reactjs-popup/dist/index.css';
import Timer from '../Clock/Clock';
import Pop from '../Popup/Popup';
import '../Popup/Popup.css';

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
              <Pop />
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const UserData = () => {
    return (
      <div className="userData">
        <Timer />
        <p>balance: 5000 </p>
        <p>equity: 5150</p>
        <p>current P/L: 150</p>
      </div>
    );
  };

  return (
    <div className="accountContainer">
      <div className="userAccount">
        <Position />
        <Papers />
        <Papers />
        <Papers />
        <div>
          <UserData />
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
