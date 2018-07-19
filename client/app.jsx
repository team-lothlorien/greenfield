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
      location: '',
      latLong: ''
    };
    this.takeUsToHomePage = this.takeUsToHomePage.bind(this);
    this.takeUsToFavoritesPage = this.takeUsToFavoritesPage.bind(this);
    this.takeUsToLoginPage = this.takeUsToLoginPage.bind(this);
    this.swapFav = this.swapFav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getMapApi = this.getMapApi.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
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
  handleSearch(term, location) {
    axios.get(`/search`, {
      params: {
        term: term,
        location: location,
      }
    })
      .then( response => {
        this.setState({doctors: response.data})
      })
      .catch( err => console.log(err))
  }

  getMapApi(location) {
    axios.get('/location', {
      params: { 
        location: location 
      }
    })
      .then( response => {
        this.setState({ latLong: [response.data[0], response.data[1]] })
      })
      .catch( err => console.log(err))
  }

  updateLocation(location) {
    this.getMapApi(location);
  }

  // componentDidUpdate() {
  //   console.log('component Did Update...:', this.state.location);
  //   this.getMapApi(this.state.location)
  // }

  componentDidMount() {

  }
  onDoctorClick(doctor){
    this.setState({doctors: [doctor]})
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
        <Search 
          handleSearch={this.handleSearch} 
          updateLocation={this.updateLocation}
        />
        <Info
          doctors={this.state.doctors}
          getMapApi={this.getMapApi}
          location={this.state.location}
          onClick={this.onDoctorClick.bind(this)}
          latLong={this.state.latLong}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
