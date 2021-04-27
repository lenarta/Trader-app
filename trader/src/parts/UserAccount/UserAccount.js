import React from 'react';
import './UserAccount.css';

const UserAccount = () => {
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
        <tr className="positions">
          <td>GOOG</td>
          <td>100</td>
          <td>1120</td>
          <td>1150</td>
          <td>+30</td>
          <td>
            <button>close</button>
          </td>
        </tr>
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

        <p>useraccount</p>
      </div>
    </div>
  );
};

export default UserAccount;
