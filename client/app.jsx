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
        <header className="navbar"><h1>Navbar</h1></header>
        <h4>search, filter</h4>
        <div className="main">
        </div>
      </div>
    );
  }
}
