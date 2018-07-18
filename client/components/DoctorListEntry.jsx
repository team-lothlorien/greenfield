import React from 'react';
var DoctorListEntry = (props) => {
  return(
    <div className="dleCard">
      <div className="dleIntro">
        <a className="dleName" onClick={() => props.onClick(props.doctor)}>{props.doctor.profile.first_name+" "+props.doctor.profile.last_name+" "+props.doctor.profile.title}</a>
        <img className="dleImage" src={props.doctor.profile.image_url}></img>
      </div>
      <div className="dleSummary">
        <span>Distance: {Number(props.doctor.practices[0].distance).toFixed(1)}mi</span>
      </div>
    </div>
  );
};

export default DoctorListEntry;
