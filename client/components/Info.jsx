import React from 'react';
import DoctorList from './DoctorList.jsx';
import MapContainer from './Map.jsx';


import Doctor from './Doctor.jsx';
var Info = (props) => {
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
          <Doctor doctor={props.doctors[0]} />
          <div className="map"><MapContainer
            location={props.location}
            className="map"
            latLong={props.latLong}
            doctors={props.doctors}
          />
          </div>
        </div>
          )
    } else {
      return (
        <div className="bodyWrapper">
          <div id="land">Landing view</div>
          <div className="map"><MapContainer
            location={props.location}
            className="map"
            latLong={props.latLong}
            doctors={props.doctors}
          />
          </div>
        </div>
        )
    }
}

export default Info;
