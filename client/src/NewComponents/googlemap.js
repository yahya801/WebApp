import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';
 
/* Default position */
const defaultPosition = {
    lat:	24.926294,
    lng: 	67.022095
};
 
 
export class LocationPickerExample extends Component {
  constructor (props) {
    super(props);
 
    this.state = {
      address: "Kala Pattar Ascent Trail, Khumjung 56000, Nepal",
      position: {
         lat:	24.926294,
         lng: 	67.022095
      }
    };
 
    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }
 
  handleLocationChange ({ position, address, places }) {
 
    // Set new location
    this.setState({ position, address });
  }
 
  render () {
    return (
      <div>
        <h1>{this.state.address}</h1>
        <div>
            <h1>bhcbwhvb</h1>
          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div>
    )
  }
}
export default LocationPickerExample