import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      favorites: [],
      compare: [],
      showFavorites: false,
    };
    this.takeUsToHomePage = this.takeUsToHomePage.bind(this);
    this.takeUsToFavoritesPage = this.takeUsToFavoritesPage.bind(this);
    this.takeUsToLoginPage = this.takeUsToLoginPage.bind(this);
  }

  takeUsToHomePage (event) {
    event.preventDefault();
    // do something to change info section
  }
  takeUsToFavoritesPage (event) {
    event.preventDefault();
    // do something to change info section
  }
  takeUsToLoginPage (event) {
    event.preventDefault();
    // do something to change info section
  }

  componentDidMount() {

  }

  getDoctors() {

  }

  saveDoctor() {

  }

  deleteDoctor() {

  }

  render() {
    return (
      <div className="app">
        <NavBar.jsx  
          takeUsToHomePage={this.takeUsToHomePage}
          takeUsToFavoritesPage={this.takeUsToFavoritesPage}
          takeUsToLoginPage={takeUsToLoginPage}
        />
        <h4>search, filter</h4>
        <div className="main">
        </div>
      </div>
    );
  }
}
