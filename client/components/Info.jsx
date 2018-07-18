import React from 'react';
import DoctorList from './DoctorList.jsx';
import Doctor from './Doctor.jsx';
var Info = (props) => {
    if (props.doctors.length > 1) {
      return (<DoctorList doctors={props.doctors} onClick={props.onClick}/>);
    } else if (props.doctors.length === 1) {
      return (<Doctor doctor={props.doctors[0]} />)
    } else {
      return (<div id="land">Landing view</div>)
    }
}

export default Info;
