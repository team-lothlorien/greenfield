import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const style = {
  margin: 15,
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      gender: '',
      age: null,
      zipCode: null,
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit(event) {
    //console.log('ZIPCODEZIPCODE:', this.state.zipcode);

    axios.post('/signup', {

      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      age: this.state.age,
      zipCode: this.state.zipCode,
      email: this.state.email
    })
    .then(resp => {
      //console.log('RESPONSE:', resp);
    })
    .catch(err => {
      //console.log('ERROR:', err);
    });
    this.props.createUser(this.state.username);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <MuiThemeProvider >
          <div>
            <AppBar title="Signup"/>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              id="username"
              onChange={this.handleChange}
            />
            <br/>
            <TextField
              hintText="Enter your Password"
              floatingLabelText="Password"
              id="password"
              type="password"
              onChange={this.handleChange}
            />
          <br/>
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            id="firstName"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            id="lastName"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            hintText="Enter your Age"
            floatingLabelText="Age"
            id="age"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            hintText="Enter your Gender"
            floatingLabelText="Gender"
            id="gender"
            onChange={this.handleChange}
          />

          <br/>
          <TextField
            hintText="Enter your Zipcode"
            floatingLabelText="Zipcode"
            id="zipCode"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            id="email"
            type="email"
            onChange={this.handleChange}
          />
          <br/>
          <RaisedButton label="Submit" primary={true}
            style={style} onClick={(event) => this.handleSubmit(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default Signup;
