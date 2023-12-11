import React, { useCallback, useEffect, useRef, useState } from "react";

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

interface GoogleMapProps {
    lat: number;
    lng: number;
    zoom: number;
    markers: Coordinates[];
    polygons: PolygonCoordinates;
    visiblePolygons: boolean[];
}

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
    const googlePolygonsRef = useRef<google.maps.Polygon[][]>([]);

    const markersRef = useRef<google.maps.Marker[]>([]);
    const clearMarkers = () => {
        markersRef.current.forEach((marker) => marker.setMap(null));
        markersRef.current = [];
    };

    // Function to initialize the map
    const initMap = useCallback(() => {
        const map = new google.maps.Map(googleMapRef.current!, {
            center: { lat, lng },
            zoom,
            scrollwheel: true,
            streetViewControl: false,
        });
        setGoogleMap(map);
    }, [lat, lng, zoom]);

    // Load the Google Maps script
    useEffect(() => {
        if (window.google && !googleMap) {
            initMap();
        } else if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAwtbycn3l16COzlzrOLZUd9aqnpGvbQ0I&callback=initGoogleMap`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            window.initGoogleMap = initMap;

            return () => {
                document.body.removeChild(script);
                window.initGoogleMap = undefined;
            };
        }
    }, [initMap, googleMap]);

    // Create polygons
    useEffect(() => {
        if (googleMap && polygons.length && !googlePolygonsRef.current.length) {
            const newGooglePolygons = polygons.map((polygonGroup, groupIndex) =>
                polygonGroup.map(
                    (polygonCoords) =>
                        new google.maps.Polygon({
                            paths: polygonCoords,
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillOpacity: 0.35,
                            fillColor: colors[groupIndex % colors.length],
                            map: visiblePolygons[groupIndex] ? googleMap : null,
                        }),
                ),
            );

            googlePolygonsRef.current = newGooglePolygons;
        }
    }, [googleMap, polygons, visiblePolygons]);

    // Update polygons visibility
    useEffect(() => {
        if (googleMap && googlePolygonsRef.current.length) {
            googlePolygonsRef.current.forEach((polygonGroup, index) => {
                const isVisible = visiblePolygons[index];
                polygonGroup.forEach((polygon) => {
                    polygon.setMap(isVisible ? googleMap : null);
                });
            });
        }
    }, [visiblePolygons, googleMap]);

    // Function to check if a marker is inside all visible polygons
    const isMarkerInsideAllVisiblePolygons = useCallback(
        (marker: Coordinates): boolean => {
            // Iterate over all polygon groups
            return googlePolygonsRef.current.every((polygonGroup, index) => {
                // Only check for groups that are visible
                if (!visiblePolygons[index]) return true;

                // Check if the marker is inside any polygon in the group
                return polygonGroup.some((polygon) => {
                    const geolibPolygon = polygon
                        .getPath()
                        .getArray()
                        .map((p) => ({
                            latitude: p.lat(),
                            longitude: p.lng(),
                        }));

                    return isPointInPolygon(
                        { latitude: marker.lat, longitude: marker.lng },
                        geolibPolygon,
                    );
                });
            });
        },
        [visiblePolygons],
    );

    // Markers and Info Windows
    useEffect(() => {
        if (!googleMap || markers.length === 0 || googlePolygonsRef.current.length === 0) {
            clearMarkers();
            return;
        }
        if (googleMap && markers.length && googlePolygonsRef.current.length) {
            clearMarkers();
            markers.forEach((marker) => {
                if (isMarkerInsideAllVisiblePolygons(marker)) {
                    const googleMarker = new google.maps.Marker({
                        position: marker,
                        map: googleMap,
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
                        infoWindow.open(googleMap, googleMarker);

                        google.maps.event.addListener(infoWindow, "closeclick", () => {
                            ReactDOM.unmountComponentAtNode(infoWindowDiv);
                        });
                    });
                    markersRef.current.push(googleMarker);
                }
            });
        }
    }, [googleMap, markers, visiblePolygons]);

    return <div ref={googleMapRef} style={{ width: "100%", height: "90%" }} />;
};

export default GoogleMap;
