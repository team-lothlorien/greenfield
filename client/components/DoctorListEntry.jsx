import React from 'react';
var DoctorListEntry = (props) => {
  return(
    <div className="dleCard">
      <div className="dleIntro">
        <h2 className="dleName">{props.doctor.profile.first_name+" "+props.doctor.profile.last_name+" "+props.doctor.profile.title}</h2>
        <img src={props.doctor.profile.image_url}></img>
      </div>
      <div className="dleSummary">
        <img src={props.doctor.ratings[0].image_url_small}></img>
        <span>Distance: {Number(props.doctor.practices[0].distance).toFixed(1)}mi</span>
      </div>
    </div>
  );
};

export default DoctorListEntry;
