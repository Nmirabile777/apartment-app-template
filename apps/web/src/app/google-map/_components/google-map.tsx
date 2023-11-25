// import React from "react";
// import { GoogleMap, Marker, InfoWindow, Polygon } from "@react-google-maps/api";
// import { FancyInfoWindowContent } from "@/app/google-map/_components/windowContent";

// type Coordinates = {
//   lat: number;
//   lng: number;
// };

// type PolygonCoordinates = Coordinates[][][];

// type GoogleMapProps = {
//   lat: number;
//   lng: number;
//   zoom: number;
//   markers: Coordinates[];
//   polygons: PolygonCoordinates;
// };

// const mapContainerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const options = {
//   scrollwheel: true,
//   streetViewControl: false,
// };

// const GoogleMapComponent: React.FC<GoogleMapProps> = ({ lat, lng, zoom, markers, polygons }) => {
//   const [activeMarker, setActiveMarker] = React.useState<null | number>(null);

//   const onMarkerClick = (markerIdx: number) => {
//     setActiveMarker(markerIdx);
//   };

//   return (
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       center={{ lat, lng }}
//       zoom={zoom}
//       options={options}
//     >
//       {markers.map((coord, idx) => (
//         <Marker
//           key={idx}
//           position={coord}
//           onClick={() => onMarkerClick(idx)}
//           icon={{
//             url: "./icon.png",
//             scaledSize: new google.maps.Size(50, 50),
//           }}
//         >
//           {activeMarker === idx ? (
//             <InfoWindow onCloseClick={() => setActiveMarker(null)}>
//               <FancyInfoWindowContent
//                 title="Some Title"
//                 message="Some Message"
//                 onButtonClick={() => console.log("Button clicked!")}
//               />
//             </InfoWindow>
//           ) : null}
//         </Marker>
//       ))}
//       {polygons.map((polygonCoords, idx) => (
//         <Polygon
//           key={idx}
//           paths={polygonCoords}
//           options={{
//             strokeColor: "#FF0000",
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: "#FF0000",
//             fillOpacity: 0.35,
//           }}
//         />
//       ))}
//     </GoogleMap>
//   );
// };

// export default GoogleMapComponent;
