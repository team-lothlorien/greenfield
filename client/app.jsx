import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import Search from './components/Search.jsx';
import Info from './components/Info.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      compare: [],
    };
    this.takeUsToHomePage = this.takeUsToHomePage.bind(this);
    this.takeUsToFavoritesPage = this.takeUsToFavoritesPage.bind(this);
    this.takeUsToLoginPage = this.takeUsToLoginPage.bind(this);
    this.swapFav = this.swapFav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  swapFav (){

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
  handleSearch(event, filter, location) {
    event.preventDefault();
    
    axios.get(`/search/${filter}/${location}`)
      .then( response => console.log(response.data))
      .catch( err => console.log(err))
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
        <NavBar
          takeUsToHomePage={this.takeUsToHomePage}
          takeUsToFavoritesPage={this.takeUsToFavoritesPage}
          takeUsToLoginPage={this.takeUsToLoginPage}
        />
        <Search handleSearch={this.handleSearch} />
        <Info doctors={this.state.doctors} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
