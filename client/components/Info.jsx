import React from 'react';
import DoctorList from './DoctorList.jsx';
import MapContainer from './Map.jsx';

import Doctor from './Doctor.jsx';
var Info = (props) => {
    if (props.doctors.length > 1) {
      return (
        <div className="bodyWrapper">
          <DoctorList doctors={props.doctors} onClick={props.onClick}/>
          <MapContainer location={props.location} className="map" />
        </div>
        );
    } else if (props.doctors.length === 1) {
      return (
        <div className="bodyWrapper">
          <Doctor doctor={props.doctors[0]} />
          <MapContainer location={props.location} className="map" />
        </div>
          )
    } else {
      return (
        <div className="bodyWrapper">
          <div id="land">Landing view</div>
          <MapContainer location={props.location} className="map" />
        </div>
        )
    }
}

export default Info;
