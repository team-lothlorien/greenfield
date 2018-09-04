import React from 'react';
import CommentBox from './CommentBox.jsx';

var Doctor = (props) => {
  return(
    <div className="dCard">
      <button className="back" onClick={() => props.back()}>Back to results...</button>
      <button className="favorite" onClick={() => props.favorite(props.doctor)}>Favorite this doctor</button>
      <div className="dIntro">
        <a className="dName">{props.doctor.profile.first_name+" "+props.doctor.profile.last_name+" "+props.doctor.profile.title}</a>
        <img className="dImage" src={props.doctor.profile.image_url}></img>
      </div>
      <div className="dSummary">
        <span>Distance: {Number(props.doctor.practices[0].distance).toFixed(1)}mi</span>
        <p className="dBio">Bio: {props.doctor.profile.bio}</p>
        <span className="spacer dleCard"></span>
      </div>
      <div className="comment-box">
        <CommentBox
          doctor={props.doctor}
          loggedIn={props.loggedIn}
          username={props.username}
        />
      </div>
    </div>
  )
};

export default Doctor;
