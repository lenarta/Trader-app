import React from 'react';
import { useSelector } from 'react-redux';
import 'reactjs-popup/dist/index.css';
import Timer from '../Clock/Clock';
import Pop from '../Popup/Popup';
import '../Popup/Popup.css';

import './UserAccount.css';

const UserAccount = () => {
  const prices = useSelector((state) => state.trading.prices);
  const data = {
    balance: 1257,
    stocks: [
      {
        amount: 3,
        type: 'GOOG',
        buyInPrice: 10.5,
        id: 1,
      },
      {
        amount: 6,
        type: 'MSFT',
        buyInPrice: 15,
        id: 2,
      },
      {
        amount: 21,
        type: 'TWTR',
        buyInPrice: 20,
        id: 3,
      },
    ],
  };

  let profloss = 0;

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

  const Papers = ({ amount, type, buyInPrice, id }) => {
    return (
      <table>
        <tr className="position" id={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{buyInPrice}</td>
          <td>{prices[type]}</td>
          <td>{(prices[type] - buyInPrice).toFixed(2)}</td>
          <td>
            <Pop />
          </td>
        </tr>
      </table>
    );
  };

  const UserData = () => {
    return (
      <div className="userData">
        <Timer />
        <p>balance: {data.balance}</p>
        <p>equity: {(data.balance + profloss).toFixed(2)}</p>
        <p>current P/L: {profloss.toFixed(2)}</p>
      </div>
    );
  };

  return (
    <div className="accountContainer">
      <div className="userAccount">
        <Position />
        {data.stocks.map(({ amount, type, buyInPrice, id }) => {
          // eslint-disable-next-line no-const-assign
          profloss += prices[type] - buyInPrice;
          return (
            <div>
              <Papers amount={amount} type={type} buyInPrice={buyInPrice} />
            </div>
          );
        })}
        <div>
          <UserData />
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
