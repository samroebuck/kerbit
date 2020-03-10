import React from 'react';
import GoogleMapReact from 'google-map-react';

const dataurl = process.env.PUBLIC_URL + '/mapdata.json';

const handleApiLoaded = (map, maps) => {
  map.data.loadGeoJson(dataurl)

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function getLocation(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
     }); 
  }
}

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}



class MapContainer extends React.Component {
  static defaultProps = {
    center: { lat: 53.806683, lng: -1.555033 },
    zoom: 13
  };

 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='response__map'>
      <p>Your closest centre is</p>
      <div style={{ height: '90%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAktrqUtTebXXG7ZufiZI-uB2rPKIAt--U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          options={createMapOptions}
        >
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}


export default MapContainer;