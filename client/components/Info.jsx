import React from 'react';
import DoctorList from './DoctorList.jsx';
import MapContainer from './Map.jsx';


import Doctor from './Doctor.jsx';
var Info = (props) => {
    if(props.doctors === ""){
      return (<h1 id="land">NO RESULTS FOUND</h1>);
    }
    if (props.doctors.length > 1) {
      return (
        <div className="bodyWrapper">
          <DoctorList
            doctors={props.doctors}
            onDoctorClick={props.onDoctorClick}
          />
          <div className="map"><MapContainer
            location={props.location}
            className="map"
            latLong={props.latLong}
            doctors={props.doctors}
          />
          </div>
        </div>
        );
    } else if (props.doctors.length === 1) {
      return (
        <div className="bodyWrapper">
          <Doctor doctor={props.doctors[0]} back={props.back} favorite={props.favorite}/>
          <div className="map"><MapContainer
            location={props.location}
            className="map"
            latLong={props.latLong}
            doctors={props.doctors}
            loggedIn={props.loggedIn}
            username={props.username}
          />
          </div>
        </div>
          )
    } else {
      return (
        <div className="bodyWrapper">
          <h1 id="land">BETTER DOCTORS. BETTER CARE.</h1>
          </div>
        )
    }
}

export default Info;
