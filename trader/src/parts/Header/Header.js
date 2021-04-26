import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import deleteStoreAction from '../../actions/deleteStore';
import './Header.css';

const Header = () => {
  const cookie = new Cookies();
  const username = useSelector((state) => state.login.data.sub);
  const token =
    useSelector((state) => state.login.token) ||
    localStorage.getItem('accessToken');
  const accessToken = new Cookies().get('accessToken');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoutClick = () => {
    history.push('/login');
    cookie.remove('accessToken');
    dispatch(deleteStoreAction());
  };

  const setHeaderToLogin = (
    <nav className="header">
      <Link to="/main">
        <h1>Trader</h1>
      </Link>
      <div className="headerLinks">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );

  const setHeaderToMain = (
    <nav className="header">
      <Link to="/main">
        <h1>Welcome to Trader</h1>
      </Link>
      <div className="headerLinks">
        <Link to="/memes"> {username} </Link>
        <Link to="/settings">Settings</Link>
        <Link to="/" onClick={handleLogoutClick}>
          Logout
        </Link>
      </div>
    </nav>
  );
  return token || accessToken ? setHeaderToMain : setHeaderToLogin;
};

export default Header;
