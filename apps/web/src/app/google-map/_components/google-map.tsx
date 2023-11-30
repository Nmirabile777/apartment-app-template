// GoogleMap.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

import ReactDOM from "react-dom";

import { FancyInfoWindowContent } from "@/app/google-map/_components/windowContent";

declare global {
    interface Window {
        initGoogleMap?: () => void;
    }
}

const colors = ["#3e4195", "#FF5733", "#33FFCE"];

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

const GoogleMap: React.FC<GoogleMapProps> = ({ lat, lng, zoom, markers, polygons }) => {
    const googleMapRef = useRef<HTMLDivElement>(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const initMap = () => {
            if (googleMapRef.current) {
                const map = new google.maps.Map(googleMapRef.current, {
                    center: { lat, lng },
                    zoom,
                    scrollwheel: true,
                    streetViewControl: false,
                });

                markers.forEach((coord) => {
                    const marker = new google.maps.Marker({
                        position: coord,
                        map: map,
                        icon: {
                            url: "/images/icon.png",
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
                            infoWindowDiv,
                        );

                        infoWindow.setContent(infoWindowDiv);
                        infoWindow.open(map, marker);

                        google.maps.event.addListener(infoWindow, "closeclick", () => {
                            ReactDOM.unmountComponentAtNode(infoWindowDiv);
                        });
                    });
                });

                polygons.forEach((polygonGroup, index) => {
                    const color = colors[index % colors.length];
                    polygonGroup.forEach((polygonCoords) => {
                        new google.maps.Polygon({
                            paths: polygonCoords,
                            strokeColor: color,
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: color,
                            fillOpacity: 0.35,
                            map: map,
                        });
                    });
                });
            }
        };

        if (!scriptLoaded) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAwtbycn3l16COzlzrOLZUd9aqnpGvbQ0I&callback=initGoogleMap`;
            script.async = true;
            script.defer = true;
            script.onload = () => setScriptLoaded(true);
            script.onerror = () => console.error("Google Maps script failed to load.");
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }

        window.initGoogleMap = initMap;

        if (scriptLoaded) {
            initMap();
        }

        return () => {
            window.initGoogleMap = undefined;
        };
    }, [lat, lng, zoom, markers, polygons, scriptLoaded]);

    return <div ref={googleMapRef} style={{ width: "100%", height: "90%" }} />;
};

export default GoogleMap;
