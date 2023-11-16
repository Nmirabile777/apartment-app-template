"use client";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { FancyInfoWindowContent } from "@/app/google-map/_components/windowContent";

declare global {
  interface Window {
    initGoogleMap: () => void;
  }
}

type Coordinates = {
  lat: number;
  lng: number;
};

type PolygonCoordinates = Coordinates[][][];

type GoogleMapProps = {
  lat: number;
  lng: number;
  zoom: number;
  markers: Coordinates[];
  polygons: PolygonCoordinates;
};

const GoogleMap: React.FC<GoogleMapProps> = ({
  lat,
  lng,
  zoom,
  markers,
  polygons,
}) => {
  const googleMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAwtbycn3l16COzlzrOLZUd9aqnpGvbQ0I&callback=initGoogleMap`;
    googleMapScript.async = true;
    document.body.appendChild(googleMapScript);

    window.initGoogleMap = () => {
      if (googleMapRef.current) {
        const map = new window.google.maps.Map(googleMapRef.current, {
          center: { lat, lng },
          zoom: zoom,
          scrollwheel: true,
          streetViewControl: false,
        });

        markers.forEach((coord) => {
          const marker = new google.maps.Marker({
            position: coord,
            map: map,
            icon: {
              url: "./icon.png",
              size: new google.maps.Size(100, 100),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(40, 70),
              scaledSize: new google.maps.Size(100, 100),
            },
          });

          const infoWindow = new google.maps.InfoWindow();

          marker.addListener("click", () => {
            const infoWindowDiv = document.createElement("div");

            ReactDOM.render(
              <FancyInfoWindowContent
                title="Some Title"
                message="Some Message"
                onButtonClick={() => console.log("Button clicked!")}
              />,
              infoWindowDiv
            );

            infoWindow.setContent(infoWindowDiv);
            infoWindow.open(map, marker);

            google.maps.event.addListener(
              infoWindow,
              "closeclick",
              function () {
                ReactDOM.unmountComponentAtNode(infoWindowDiv);
              }
            );
          });
        });

        // Draw polygons
        polygons.forEach((polygonCoords) => {
          new google.maps.Polygon({
            paths: polygonCoords,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: map,
          });
        });
      }
    };

    return () => {
      document.body.removeChild(googleMapScript);
    };
  }, [lat, lng, zoom, markers, polygons]);

  return <div ref={googleMapRef} style={{ width: "100%", height: "400px" }} />;
};

export default GoogleMap;
