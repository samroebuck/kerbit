import React from 'react';
// modules
import GoogleMapReact from 'google-map-react';
// data
import data from '../../data/mapdata.json';
import MapIcon from '../../images/mapicon.svg'

const getInfoWindowString = features => `
    <div>
      <div style="font-size: 16px; font-weight: bold; color: #7f7281; margin-bottom: 5px;">
        <p className='info__title'>${features.properties['Site Name']}</p>
      </div>
      <div style="font-size: 16px; margin-bottom: 5px;">
        <p className='info__type'>Recycles: ${features.properties['Type']}</p>
      </div>
      <div style="font-size: 16px; margin-bottom: 5px;">
        <p className='info__address'>Address: ${features.properties['Address']}, ${features.properties['Post Code']}</p>
      </div>
    </div>`;

const handleApiLoaded = (map, maps, google) => {
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
        icon: { url: MapIcon},
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
    disableDefaultUI: true,
    styles:  [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
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
        <p className='map__title'>Your closest centre:</p>
        <div  className='map__container' style={{  width: '100%' }}>
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
