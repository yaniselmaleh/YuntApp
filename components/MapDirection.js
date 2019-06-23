// import React, { Component } from "react";
// import { Map, Marker, GoogleApiWrapper, Polygon } from "google-maps-react";



// export class MapContainer extends Component {
  
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const google = window.google;
    
//     if (!this.props.google) {
//       return <div>Loading...</div>;
//     }

//     const triangleCoords = [
//       // 48.8450442,2.3851299,1
//       {lat: 48.8450442, lng: 2.3851299},
//       {lat: 48.8469785, lng: 2.3859882},
//       {lat: 48.8465972, lng: 2.3852157}

//       // {lat: 25.774, lng: -80.190},
//       // {lat: 18.466, lng: -66.118},
//       // {lat: 32.321, lng: -64.757},
//       // {lat: 25.774, lng: -80.190}
//     ];



    
//     return (
//       <div>
//         <Map
//           style={{
//             minWwidth: "200px",
//             minHeight: "200px"
//           }}
         
//           google={this.props.google}
//           zoom={18}

//           initialCenter={{
//             lat: 48.8461315,
//             lng: 2.3854732
//           }}

//           styles={
//             [
//               {
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#f5f5f5"
//                   }
//                 ]
//               },
//               {
//                 "elementType": "labels.icon",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#616161"
//                   }
//                 ]
//               },
//               {
//                 "elementType": "labels.text.stroke",
//                 "stylers": [
//                   {
//                     "color": "#f5f5f5"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "administrative.land_parcel",
//                 "elementType": "labels",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "administrative.land_parcel",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#bdbdbd"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#eeeeee"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi",
//                 "elementType": "labels.text",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#757575"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi.business",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi.park",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#e5e5e5"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi.park",
//                 "elementType": "labels.text",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "poi.park",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#9e9e9e"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#ffffff"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.arterial",
//                 "elementType": "labels",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.arterial",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#757575"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.highway",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#dadada"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.highway",
//                 "elementType": "labels",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.highway",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#616161"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.local",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.local",
//                 "elementType": "labels",
//                 "stylers": [
//                   {
//                     "visibility": "off"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "road.local",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#9e9e9e"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "transit.line",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#e5e5e5"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "transit.station",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#eeeeee"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "water",
//                 "elementType": "geometry",
//                 "stylers": [
//                   {
//                     "color": "#c9c9c9"
//                   }
//                 ]
//               },
//               {
//                 "featureType": "water",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                   {
//                     "color": "#9e9e9e"
//                   }
//                 ]
//               }
//             ]
//           }
//         >

//         <Polygon
//           paths={triangleCoords}
//           strokeColor="white"
//           strokeOpacity={0.8}
//           strokeWeight={2}
//           fillColor="#dc6795"
//           fillOpacity={0.35}
//         />

//         <Marker
//           title={'The marker`s title will appear as a tooltip.'}
//           name={'SOMA'}
//           position={{lat: 48.8461315, lng: 2.3854732}}
//         />
        

//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDmVf0AAsOZKBirdmAb67M_U4k8atiU-d4",
//   v: "3"
// })(MapContainer);




/*global google*/
import React, { Component } from "react";
import { withGoogleMap, GoogleMap, DirectionsRenderer, directionsDisplay } from "react-google-maps";


class Map extends Component {
  state = {
    directions: null
  };
  
  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: "yellow" } });
    // const directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: "red" } });


    const origin = { lat: 48.8461315, lng: 2.3854732 };
    const destination = { lat: 48.8451245, lng: 2.3730395 };

    
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING   
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (

      <GoogleMap
        defaultCenter={{ lat: 48.8461315, lng: 2.3854732 }}
        defaultZoom={14}
        // style={{
        //     minWwidth: "200px",
        //     minHeight: "200px"
        //   }}
         
          google={this.props.google}
          zoom={18}

          // initialCenter={{
          //   lat: 48.8461315,
          //   lng: 2.3854732
          // }}

          styles={
            [
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
                "featureType": "poi.business",
                "stylers": [
                  {
                    "visibility": "off"
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
                "elementType": "labels.text",
                "stylers": [
                  {
                    "visibility": "off"
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
                "featureType": "road.arterial",
                "elementType": "labels",
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
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
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
                "stylers": [
                  {
                    "visibility": "off"
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
          }
      >


      <DirectionsRenderer
        // polylineOptions= {{ strokeColor: "green" }}
        directions={this.state.directions}
      />

      </GoogleMap>
    ));
    
    
    return (
      <div>
        <GoogleMapExample
          polylineOptions= {{ strokeColor: "green" }}
          containerElement={<div style={{ height: `100vh`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
