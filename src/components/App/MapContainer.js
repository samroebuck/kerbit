import React from 'react';
// modules
import GoogleMapReact from 'google-map-react';
// data
import data from '../../data/mapdata.json';

const getInfoWindowString = features => `
    <div>
      <div style="font-size: 16px;">
        ${features.properties['Site Name']}
      </div>
    </div>`;

const handleApiLoaded = (map, maps) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function getLocation(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
    });
  }

  let mapdata = data.features;
  const markers = [];
  const infowindows = [];

  mapdata.forEach(features => {
    markers.push(
      new maps.Marker({
        position: {
          lat: features.geometry.coordinates[1],
          lng: features.geometry.coordinates[0]
        },
        map
      })
    );

    infowindows.push(
      new maps.InfoWindow({
        content: getInfoWindowString(features)
      })
    );
  });

  markers.forEach((marker, i) => {
    marker.addListener('click', () => {
      infowindows[i].open(map, marker);
    });
  });
};

const createMapOptions = () => {
  return {
    disableDefaultUI: true
  };
};

class MapContainer extends React.Component {
  static defaultProps = {
    center: { lat: 53.806683, lng: -1.555033 },
    zoom: 15
  };

  render() {
    const key = process.env.REACT_APP_MAPS_KEY;

    return (
      <div className='response__map'>
        <p>Your closest centre is</p>
        <div style={{ height: '200px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${key}` }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps, google }) =>
              handleApiLoaded(map, maps, google)
            }
            options={createMapOptions}
          ></GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapContainer;
