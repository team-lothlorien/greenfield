import React from 'react';
var Doctor = (props) => {
  return(
    <div className="dCard">
      <div className="dIntro">
        <a className="dName">{props.doctor.profile.first_name+" "+props.doctor.profile.last_name+" "+props.doctor.profile.title}</a>
        <img className="dImage" src={props.doctor.profile.image_url}></img>
      </div>
      <div className="dSummary">
        <span>Distance: {Number(props.doctor.practices[0].distance).toFixed(1)}mi</span>
        <p className="dBio">Bio: {props.doctor.profile.bio}</p>
        <span className="spacer dleCard"></span>
      </div>
    </div>
  )
};

export default Doctor;
