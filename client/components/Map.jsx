
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {API_KEY_GEO} from '../../server/config';

const defaultProps = {
  center: {
    lat: 40.730610,
    lng: -73.935242
  },
  zoom: 10
};

const AnyReactComponent = ({ text }) => <div style={{ height: '20px', width: '20px', background: 'red', borderRadius: '50%' }}>{text}</div>;


class MapContainer extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
     
    }
  }
    

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '60%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY_GEO }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={40.730610}
            lng={-73.935242}
           
          />
          <AnyReactComponent
            lat={40.73110}
            lng={-73.92242}
           
          />
          <AnyReactComponent
            lat={40.730410}
            lng={-73.95242}
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;