import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 15,
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      invalidUser: false,
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
    console.log('username:', this.state.username);
    console.log('password:', this.state.password);
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(resp => {
      console.log('RESPONSE:', resp);
      if (resp.data.status === 'badUser') {
        this.setState({
          invalidUser: true
        }, () => {
          alert('Invalid Username!');
        });
      } else if (resp.data.status === 'badPassword') {
        alert('Invalid Password!');
      }
    })
    .catch(err => {
      console.log('ERROR:', err);
    });
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login"/>
            <TextField
              hintText="Enter your Username"
              // floatingLabelText="Username"
              id="username"
              onChange={this.handleChange}
            />
            <br/>
            <TextField
              hintText="Enter your Password"
              // floatingLabelText="Password"
              id="password"
              type="password"
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

export default Login;
