import React from 'react';
import Popup from 'reactjs-popup';

const Pop = () => (
  <Popup
    trigger={
      <button className="button" onClick={(e) => console.log(e.target)}>
        {' '}
        close{' '}
      </button>
    }
    modal
    nested
  >
    {(close) => (
      <div className="modal">
        {/* <button className="close" onClick={close}>
          &times;
        </button> */}
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
          nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
          quibusdam voluptates delectus doloremque, explicabo tempore dicta
          adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
          alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="popup-button"> confirm </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
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
      </div>
    )}
  </Popup>
);

export default Pop;