import React from 'react'
import GoogleMapReact from 'google-map-react';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Googlemap extends React.Component {

  static defaultProps = {
     center: {lat: 59.95, lng: 30.33}, zoom:11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBUqFl9FGqvYFIrVeVtPc21EtoEVkG5iic' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    )
  }
}

export default Googlemap