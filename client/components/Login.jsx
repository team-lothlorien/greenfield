import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      zipcode: null,
      email: ''
    };
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 & this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    axios.
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <br></br>Username:
            <input type="text" id="username" autoComplete='username' value={this.state.username} onChange={this.handleChange}/>

          <br></br>Password:
            <input type="password" id="password" autoComplete='current-password' value={this.state.password} onChange={this.handleChange}/>

          <br></br>First Name:

            <input type="text" id="firstName" autoComplete='given-name' value={this.state.firstName} onChange={this.handleChange}/>

          <br></br>Last Name:
            <input type="text" id="lastName" autoComplete='family-name' value={this.state.lastName} onChange={this.handleChange}/>

          <br></br>Email:
            <input type="email" id="email" autoComplete='email' value={this.state.email} onChange={this.handleChange}/>
            <br></br>

          <button disabled={!this.validateForm()} type="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
