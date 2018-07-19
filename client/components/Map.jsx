
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {API_KEY_GEO} from '../../server/config';

// helper to process doctors returned from search and plot them on the map
let findClosestDoctors = (doctors) => {
  // flatten doc array and pull relevent data
  let flatObj = {};
  doctors.forEach( doctor => {
    if (doctor.practices.length > 0) {
      doctor.practices.forEach( loc => {

        flatObj[loc.distance] = {
          distance: loc.distance,
          lat: loc.lat,
          lon: loc.lon,
          name: `${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}`
        };
      });
    }
  });

  let flatArr = [];
  for (let key in flatObj) {
    flatArr.push(flatObj[key])
  }

  if (flatArr.length < 11) {
    return flatArr;
  }

  // take just the closest 10 doctors
  let changes = null;

  let sort = (array) => {
    changes = 0;
    for(let i = 0; i < array.length; i += 1) {
      if (i !== array.length - 1) {
        if (array[i].distance > array[i+1].distance) {
          changes++;
          let temp = array[i+1];
          array[i+1] = array[i];
          array[i] = temp;
        }
      }
    }
    while(changes > 0) {
      sort(flatArr);
    }
  };
  sort(flatArr);

  return flatArr;
}

const defaultProps = {
  center: {
    lat: 40.730610,
    lng: -73.935242
  },
  zoom: 9
};

const UserMarker = ({ text }) => <div style={{ height: '15px', width: '15px', background: 'blue', borderRadius: '50%' }}>{text}</div>;

const Marker = ({ text }) => <div style={{ height: '10px', width: '10px', background: 'red', borderRadius: '50%' }}>{text}</div>;


class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    let matchedDocs;
    if (this.props.doctors !== '[]' || this.props.doctors === undefined ) {
      matchedDocs = findClosestDoctors(this.props.doctors);
    }


    return (

      <div style={{ height: '609px', width: '50%' ,padding: '2px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY_GEO }}
          defaultCenter={defaultProps.center}
          center={
            this.props.latLong
              ? { lat: this.props.latLong[0], lng: this.props.latLong[1] }
              : { lat: 40.730610, lng: -73.935242 }
          }


          defaultZoom={defaultProps.zoom}
        >
        {
          matchedDocs.length !== undefined
            ? matchedDocs.map( doc => {
              return (
                <Marker
                  key={doc.lat}
                  lat={doc.lat}
                  lng={doc.lon}
              /> )
            })
            : ""
        }

        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
