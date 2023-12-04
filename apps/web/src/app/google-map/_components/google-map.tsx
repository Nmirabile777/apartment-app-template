"use client";

import React, { useEffect, useRef, useState } from "react";

import { isPointInPolygon } from "geolib";
import ReactDOM from "react-dom";

import { FancyInfoWindowContent } from "@/app/google-map/_components/windowContent";

declare global {
    interface Window {
        initGoogleMap?: () => void;
    }
}
const colors = [
    "#BC8F8F",
    "#A8D5BA",
    "#D1C4E9",
    "#5DA0A2",
    "#BDC3C7",
    "#F1C4A1",
    "#95A5A6",
    "#C8A2C8",
    "#E6D690",
    "#7F8C8D",
];

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

                // Convert polygons to Google Maps format
                const googlePolygons = polygons.map((polygonGroup) =>
                    polygonGroup.map(
                        (polygonCoords) =>
                            new google.maps.Polygon({
                                paths: polygonCoords,
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillOpacity: 0.35,
                                map: map,
                            }),
                    ),
                );

                const isMarkerInAllPolygonGroups = (marker: Coordinates) => {
                    for (const polygonGroup of googlePolygons) {
                        let isInAnyPolygonInGroup = false;
                        for (const polygon of polygonGroup) {
                            if (
                                isPointInPolygon(
                                    { latitude: marker.lat, longitude: marker.lng },
                                    polygon
                                        .getPath()
                                        .getArray()
                                        .map((p) => ({ latitude: p.lat(), longitude: p.lng() })),
                                )
                            ) {
                                isInAnyPolygonInGroup = true;
                                break;
                            }
                        }
                        if (!isInAnyPolygonInGroup) {
                            return false;
                        }
                    }
                    return true;
                };
                

                markers.forEach((marker) => {
                    if (isMarkerInAllPolygonGroups(marker)) {
                        const googleMarker = new google.maps.Marker({
                            position: marker,
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
                        googleMarker.addListener("click", () => {
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
                            infoWindow.open(map, googleMarker);

                            google.maps.event.addListener(infoWindow, "closeclick", () => {
                                ReactDOM.unmountComponentAtNode(infoWindowDiv);
                            });
                        });
                    }
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
                            fillOpacity: 0.25,
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
