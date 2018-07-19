import React from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 15,
};

var NavBar = (props) => {

  return (
    <div className="navWrapper">
      <span className="logoWrap"
            onClick={event => {props.takeUsToHomePage(event)}}>
        <h1 className="logo">Whats Up Doc</h1>
      </span>
      <span
        className="favorites"
        onClick={event => {props.takeUsToFavoritesPage(event)}}>Favorites
      </span>

        <MuiThemeProvider>
          <div className='login-button-navWrapper'>
            <span
              className="login"
              onClick={(event) => props.toggleHidden(event)}>Login
            </span>

            </div>
            {!props.isHidden && <div className='login-wrapper'><Login clickSignup={props.clickSignup} createUser={props.createUser}className='login-modal'/></div>}
          </MuiThemeProvider>

    </div>
  );
};

export default NavBar;
