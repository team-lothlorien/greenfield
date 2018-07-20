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
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(resp => {

      if (resp.data.status === 'badUser') {
        this.setState({
          invalidUser: true
        }, () => {
          alert('Invalid Username!');
        });
      } else if (resp.data.status === 'badPassword') {
        alert('Invalid Password!');
      } else {
        this.props.createUser(this.state.username);
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
          <RaisedButton label="Login" primary={true}
            style={style} onClick={(event) => this.handleSubmit(event)}/>
            <RaisedButton label="Signup" primary={true}
              style={style} onClick={() => this.props.clickSignup()}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;
