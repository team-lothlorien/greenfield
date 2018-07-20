import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import Search from './components/Search.jsx';
import Info from './components/Info.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Loading from './components/Loading.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const style = {
  margin: 15,
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFav: false,
      user: 'Guest',
      doctors: [],
      compare: [],
      location: '',
      latLong: '',
      loggedIn: false,
      isHidden: true,
      renderSignup: false,
      loading: false
    };


    this.createUser = this.createUser.bind(this);
    this.takeUsToHomePage = this.takeUsToHomePage.bind(this);
    this.takeUsToFavoritesPage = this.takeUsToFavoritesPage.bind(this);
    this.takeUsToLoginPage = this.takeUsToLoginPage.bind(this);
    this.swapFav = this.swapFav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getMapApi = this.getMapApi.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.saveDoctor = this.saveDoctor.bind(this);
    this.saveQueries = this.saveQueries.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.clickSignup = this.clickSignup.bind(this);
    this.swapFav = this.swapFav.bind(this);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  componentDidMount() {
    this.checkSession();
  }

  checkSession() {
    axios.get('/authenticate')
    .then(resp => {
      console.log('checksession:', resp.data);
      if (resp.data.status) {
        this.setState({
          loggedIn: true,
          user: resp.data.user
        });
      }
    })
    .catch(err => console.log('bad response'));
  }

  swapFav () {
    this.setState({
      showFav: !this.state.showFav
    });
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
    this.setState({
      loading: true
    });
    axios.get('/search', {
      params: {
        term: term,
        location: location,
      }
    })
    .then( response => {
      this.setState({doctors: response.data, loading: false});
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
      this.setState({ latLong: [response.data[0], response.data[1]] });
    })
    .catch( err => console.log(err));
  }

  updateLocation(location) {
    this.getMapApi(location);
  }

  onDoctorClick(doctor) {
    if (this.state.loggedIn) {
      this.saveDoctor(doctor);
    } else {
      this.setState({doctors: [doctor]});
    }
  }

  getDoctors() {

  }

  saveDoctor(doctor) {
    console.log(doctor);
    // axios.post('/favorites', {
    //   params: {
    //     username: doctor,
    //     doctorNPI: doctor.npi,
    //     doctorData: doctor
    //   }
    // })
    //   .then()
  }

  deleteDoctor() {

  }















  saveQueries(query) {
    console.log('saveQueries fired');
    axios.post('/queries', {
      user: this.state.user || null,
      query: query,
      timeStamp: Date.now()
    })
    .then(console.log('Queries SAVED!'));

  }


  createUser(username) {
    this.setState({
      user: username
    });
  }
  clickSignup() {
    console.log('signupClick');
    this.setState({
      renderSignup: !this.state.renderSignup
    });
  }

  render() {
    // const compClass = this.state.isHovered ? style.visibility = 'visible' : style.visibility = 'hidden';
    var renderMe;
    if (this.state.loggedIn !== true) {
      renderMe = <Info
        doctors={this.state.doctors}
        getMapApi={this.getMapApi}
        location={this.state.location}
        onDoctorClick={this.onDoctorClick.bind(this)}
        latLong={this.state.latLong}
        username={this.state.user}
      />;
    } else {
      renderMe = <h1 className="GRAVE">FIND A GRAVE SHMUCK</h1>;
    }
    return (
      <div className="app">
        <NavBar
          takeUsToHomePage={this.takeUsToHomePage}
          takeUsToFavoritesPage={this.takeUsToFavoritesPage}
          takeUsToLoginPage={this.takeUsToLoginPage}
          toggleHidden={this.toggleHidden}
          isHidden={this.state.isHidden}
          createUser={this.createUser}
          clickSignup={this.clickSignup}

        />
        <Search
          handleSearch={this.handleSearch}
          updateLocation={this.updateLocation}
          saveQueries={this.saveQueries}
        />
    
        {this.state.loading && <Loading type="Balls" color="#fff" />}

        {renderMe}
      </div>
    );
  }
}





  ReactDOM.render(<App />, document.getElementById('app'));
