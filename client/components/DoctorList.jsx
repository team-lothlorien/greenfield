import DoctorListEntry from './DoctorListEntry.jsx';
import React from 'react';
var DoctorList = (props) => {

  var DoctorListEntries = props.doctors.map((doctor) => {
    return <DoctorListEntry doctor={doctor} key={doctor.uid} onDoctorClick={props.onDoctorClick}/>;
  });
  return(
    <div className="dList">{DoctorListEntries}<span className="spacer dleCard"></span></div>
  );
};


export default DoctorList;
