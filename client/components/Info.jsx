import React from 'react';
import DoctorList from './DoctorList.jsx';
import MapContainer from './Map.jsx';

import Doctor from './Doctor.jsx';
var Info = (props) => {
    if (this.props.doctors.length > 1) {
      return (
        <div className="bodyWrapper">
          <DoctorList doctors={this.props.doctors} onClick={props.onClick}/>
          <MapContainer location={this.props.location} className="map" />
        </div>
        );
    } else if (this.props.doctors.length === 1) {
      return (
        <div className="bodyWrapper">
          <Doctor doctor={this.props.doctors[0]} />
          <MapContainer location={this.props.location} className="map" />
        </div>
          )
    } else {
      return (
        <div className="bodyWrapper">
          <div id="land">Landing view</div>
          <MapContainer location={this.props.location} className="map" />
        </div>
        )
    }
}

export default Info;
