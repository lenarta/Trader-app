import React from 'react';
import { useSelector } from 'react-redux';
import 'reactjs-popup/dist/index.css';
import Timer from '../Clock/Clock';
import Pop from '../Popup/Popup';
import '../Popup/Popup.css';

import './UserAccount.css';

const UserAccount = () => {
  /* const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [inputStatus, setInputStatus] = useState('login-input-OK'); */

  const prices = useSelector((state) => state.trading.prices);

  const data = {
    balance: 1257,
    stocks: [
      {
        amount: 2,
        type: 'MSFT',
        buyInPrice: 253.295,
        id: 2,
      },
      {
        amount: 10,
        type: 'TWTR',
        buyInPrice: 66.05,
        id: 4,
      },
      {
        amount: 6,
        type: 'GOOG',
        buyInPrice: 2434.55,
        id: 6,
      },
      {
        amount: 85,
        type: 'FB',
        buyInPrice: 306.55,
        id: 7,
      },
    ],
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log('data', data);
  };

  let profloss = 0;

  const Position = () => {
    return (
      <table className="tableHeader">
        <tbody>
          <tr>
            <th>ticker</th>
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
      <table key={id}>
        <tbody>
          <tr className="position">
            <td>{type}</td>
            <td>{amount}</td>
            <td>{buyInPrice}</td>
            <td>{prices[type]}</td>
            <td>{(prices[type] - buyInPrice).toFixed(2)}</td>
            <td>
              <Pop
                id={id}
                order="sell"
                amount={amount}
                tick={type}
                buyInPrice={buyInPrice}
                sellPrice={prices[type]}
                handleSubmit={handleSubmit}
              />
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
            <div key={id}>
              <Papers
                id={id}
                amount={amount}
                type={type}
                buyInPrice={buyInPrice}
              />
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
