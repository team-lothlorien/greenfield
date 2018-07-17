import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
<<<<<<< HEAD

=======
import NavBar from './components/NavBar.jsx';
>>>>>>> dev

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      favorites: [],
      compare: [],
      showFavorites: false,
<<<<<<< HEAD
      location: null
    };
    this.swapFav = this.swapFav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

=======
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
>>>>>>> dev

  componentDidMount() {

  }

<<<<<<< HEAD
  handleSearch(filter, term, location) {
    axios.get('/search');
  }



=======
  getDoctors() {

  }
>>>>>>> dev

  saveDoctor() {

  }

  deleteDoctor() {

  }

<<<<<<< HEAD
  swapFav() {
    this.setState({ showFaves: !this.state.showFaves });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Navbar</h1></header>
        <h4>search, filter</h4>
        <Search handleSearch={this.handleSearch} />
=======
  render() {
    return (
      <div className="app">
        <NavBar.jsx  
          takeUsToHomePage={this.takeUsToHomePage}
          takeUsToFavoritesPage={this.takeUsToFavoritesPage}
          takeUsToLoginPage={takeUsToLoginPage}
        />
        <h4>search, filter</h4>
>>>>>>> dev
        <div className="main">
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
