import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: props.doctors
    };
  }

  render() {
    if (this.state.view.length > 1) {
      return (<DoctorList doctors=this.state.doctors />);
    } else if (this.state.view.length === 1) {
      return (<Doctor doctor=this.state.doctors />)
    } else {
      return (<Div>Landing view</Div>)
    }
  }

}
