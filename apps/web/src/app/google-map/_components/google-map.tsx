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
    visiblePolygons: boolean[];
};

const GoogleMap: React.FC<GoogleMapProps> = ({
    lat,
    lng,
    zoom,
    markers,
    polygons,
    visiblePolygons,
}) => {
    const googleMapRef = useRef<HTMLDivElement>(null);
    const [googleMap, setGoogleMap] = useState<google.maps.Map>();
    const [googlePolygons, setGooglePolygons] = useState<google.maps.Polygon[][]>([]);
    useEffect(() => {
        if (googleMap && polygons.length) {
            const newGooglePolygons = polygons.map((polygonGroup, groupIndex) =>
                polygonGroup.map(
                    (polygonCoords) =>
                        new google.maps.Polygon({
                            paths: polygonCoords,
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillOpacity: 0.35,
                            fillColor: colors[groupIndex % colors.length],
                            map: googleMap,
                        }),
                ),
            );
            setGooglePolygons(newGooglePolygons);
        }
    }, [googleMap, polygons]);

    // const toggleParameterVisibility = (index: number) => {
    //     setVisibleParameters((v) => v.map((visible, i) => (i === index ? !visible : visible)));
    // };

    useEffect(() => {
        if (googleMap && googlePolygons.length) {
            googlePolygons.forEach((polygonGroup, index) => {
                const isVisible = visiblePolygons[index];
                polygonGroup?.forEach((polygon) => {
                    polygon.setMap(isVisible ? googleMap : null);
                });
            });
        }
    }, [visiblePolygons, googlePolygons, googleMap]);

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

                const googlePolygons = polygons.map((polygonGroup, groupIndex) => {
                    if (visiblePolygons[groupIndex]) {
                        return polygonGroup.map(
                            (polygonCoords) =>
                                new google.maps.Polygon({
                                    paths: polygonCoords,
                                    strokeOpacity: 0.8,
                                    strokeWeight: 0.5,
                                    fillOpacity: 0.45,
                                    fillColor: colors[groupIndex % colors.length],
                                    map: map,
                                }),
                        );
                    }
                    return null;
                });

                const isMarkerInAllPolygonGroups = (
                    marker: { lat: any; lng: any },
                    googlePolygons: (google.maps.Polygon[] | null)[],
                ) => {
                    for (const polygonGroup of googlePolygons) {
                        if (!polygonGroup) continue;

                        let isInAnyPolygonInGroup = false;
                        for (const polygon of polygonGroup) {
                            if (
                                isPointInPolygon(
                                    { latitude: marker.lat, longitude: marker.lng },
                                    polygon
                                        .getPath()
                                        .getArray()
                                        .map((p: { lat: () => any; lng: () => any }) => ({
                                            latitude: p.lat(),
                                            longitude: p.lng(),
                                        })),
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
                    if (isMarkerInAllPolygonGroups(marker, googlePolygons)) {
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
