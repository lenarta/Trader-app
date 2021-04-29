import React from 'react';
import Popup from 'reactjs-popup';

const Pop = ({ id, amount, tick, buyInPrice, sellPrice, handleSubmit }) => (
  <Popup
    trigger={
      <button className="close-button" onClick={(e) => console.log(e.target)}>
        {' '}
        close{' '}
      </button>
    }
    modal
    nested
  >
    {(close) => (
      <div className="modal">
        <div className="popcontent">
          <h1 className="order">place order</h1>
          <form className="order-form" onSubmit={handleSubmit}>
            <label for="order">
              type:
              <select>
                <option defaultValue="sell">sell</option>
                <option value="buy">buy</option>
              </select>
            </label>
            <br />
            <label htmlFor="ticker">
              ticker:
              <input
                className="popinput"
                type="text"
                id="ticker"
                name="ticker"
                required
                defaultValue={tick}
              />
            </label>
            <br />
            <label htmlFor="amount">
              amount:
              <input
                className="popinput"
                type="number"
                defaultValue={amount}
                min="1"
                max={amount}
              />
            </label>
            <br />
            <label htmlFor="saleprice">
              sale price:
              <input
                className="popinput"
                type="any"
                defaultValue={sellPrice}
                min="1"
              />
            </label>
            <br />
            <div className="actions">
              <button type="submit" className="popup-button">
                confirm
              </button>

              <button
                className="popup-button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                skip
              </button>
            </div>
          </form>
          {/* <div className="errorBox">
            {
              <div className="input-error-message">
                <i className="material-icons">warning</i>
              </div>
            }
          </div> */}
        </div>
      </div>
    )}
  </Popup>
);

export default Pop;
