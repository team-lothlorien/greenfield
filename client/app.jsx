import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import Search from './components/Search.jsx';
import Info from './components/Info.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
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
      user: '',
      doctors: [],
      compare: [],
      location: '',
      latLong: '',
      loggedIn: false
    };
    this.createUser = this.createUser.bind(this);
    this.takeUsToHomePage = this.takeUsToHomePage.bind(this);
    this.takeUsToFavoritesPage = this.takeUsToFavoritesPage.bind(this);
    this.takeUsToLoginPage = this.takeUsToLoginPage.bind(this);
    this.swapFav = this.swapFav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getMapApi = this.getMapApi.bind(this);
    this.saveDoctor = this.saveDoctor.bind(this);
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
      console.log('checksession:', resp.data.username);
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
      this.setState({doctors: [doctor]});
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

  createUser(username) {
    this.setState({
      user: username
    }, () => [
      console.log('CREATEUSER:', this.state.user)
    ]);
  }


  render() {
    // const compClass = this.state.isHovered ? style.visibility = 'visible' : style.visibility = 'hidden';
    var renderMe;
    if(this.state.loggedIn === true){
      renderMe = <Info
        doctors={this.state.doctors}
        getMapApi={this.getMapApi}
        location={this.state.location}
        onDoctorClick={this.onDoctorClick.bind(this)}
        latLong={this.state.latLong}
      />;
    }else{
      renderMe = <h1 className="GRAVE">FIND A GRAVE SHMUCK</h1>;
    }
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
        {renderMe}
        <MuiThemeProvider>
          <div className='login-button-navWrapper'>
            <RaisedButton label="Login" primary={true}
              style={style} onClick={(event) => this.toggleHidden(event)}/>
            </div>
            {!this.state.isHidden && <div className='login-wrapper'><Login createUser={this.createUser}className='login-modal'/></div>}
          </MuiThemeProvider>
          <Signup/>
        </div>
      );
    }
  }




ReactDOM.render(<App />, document.getElementById('app'));
