import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import Search from './components/Search.jsx';
import Info from './components/Info.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      compare: [],
      location: '',
      latLong: '',
      loggedIn: false
    };
    this.takeUsToHomePage = this.takeUsToHomePage.bind(this);
    this.takeUsToFavoritesPage = this.takeUsToFavoritesPage.bind(this);
    this.takeUsToLoginPage = this.takeUsToLoginPage.bind(this);
    this.swapFav = this.swapFav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getMapApi = this.getMapApi.bind(this);
    this.saveDoctor = this.saveDoctor.bind(this);

  }

  componentDidMount() {
    this.checkSession();

  }
  checkSession() {
    axios.get('/authenticate')
    .then(resp => {
      if (resp.data) {
        this.setState({
          loggedIn: true
        });
      }
    });
  }




  swapFav () {

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
    this.getMapApi(location);
    console.log('handleSearch',location)
    axios.get('/search', {
      params: {
        term: term,
        location: location,
      }
    })
      .then( response => {
        this.setState({doctors: response.data});
      })
      .catch( err => console.log(err));
  }

  getMapApi(location) {
    axios.get('/location', {
      params: { 
        location: location 
      }
    })
      .then( response => {
        console.log('in getMapApi',this.state.latLong)
        this.setState({ latLong: [response.data[0], response.data[1]] })
      })
      .catch( err => console.log(err))
  }

  onDoctorClick(doctor){
    if (this.state.loggedIn) {
      this.saveDoctor(doctor);
    } else {
      this.setState({doctors: [doctor]})
    }    
  }

  getDoctors() {

  }

  saveDoctor(doctor) {
    axios.post('/favorites', {
      params: { 
        username: this.state.user,
        doctorNPI: +doctor.npi, // hack to convert string to number   +'123'
        doctorData: doctor
      }
    })
    .catch( err => console.log(err));
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
        />
        <Info
          doctors={this.state.doctors}
          getMapApi={this.getMapApi}
          location={this.state.location}
          onDoctorClick={this.onDoctorClick.bind(this)}
          latLong={this.state.latLong}
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
