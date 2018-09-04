import React from 'react';

var DoctorListEntry = (props) => {
  return(
    <div className="dleCard" onClick={() => props.onDoctorClick(props.doctor)}>
      <div className="dleIntro">
        <a className="dleName">{props.doctor.profile.first_name+" "+props.doctor.profile.last_name+" "+props.doctor.profile.title}</a>
        <img className="dleImage" src={props.doctor.profile.image_url}></img>
      </div>
      <div className="dleSummary">
      <img className="rating" src={props.doctor.ratings !== undefined && props.doctor.ratings[0] !==undefined?  props.doctor.ratings[0].image_url_small : `https://asset2.betterdoctor.com/assets/consumer/stars/stars-small-3.0.png`}/>
        <span>Distance: {Number(props.doctor.practices[0].distance).toFixed(1)}mi</span>
        <ul>Specialties: {props.doctor.specialties.map((el, i) => {return <li key={i}>{el.name}</li>})}</ul>
      </div>
    </div>
  );
};

export default DoctorListEntry;
