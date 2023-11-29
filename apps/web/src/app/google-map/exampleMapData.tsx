// Our data will be structured as
// Isochrone(s)
//↪Polygon(s)
//↪Coordinates

export const exampleCoordinates = [
    { lat: 42.3601, lng: -71.0589 },
    { lat: 42.3467, lng: -71.0972 },
    { lat: 42.3736, lng: -71.1097 },
    { lat: 42.3389, lng: -71.0912 },
    { lat: 42.3496, lng: -71.0997 },
    { lat: 42.3679, lng: -71.0708 },
    { lat: 42.3473, lng: -71.0751 },
    { lat: 42.3588, lng: -71.0567 },
    { lat: 42.3656, lng: -71.0526 },
    { lat: 42.3782, lng: -71.0602 },
];

// This example data has one isochrone, two polygons
export const polygonCoordinates = [
    // This top level is for each parameter we enter into the isochrone generator, for example 30 minute drive from work
    [
        // This list is for each polygon in the isochrone
        [
            // This list is for each coordinate in the polygon
            { lat: 42.3601, lng: -71.0589 },
            { lat: 42.3605, lng: -71.0555 },
            { lat: 42.361, lng: -71.054 },
            { lat: 42.362, lng: -71.0535 },
            { lat: 42.363, lng: -71.0535 },
            { lat: 42.364, lng: -71.054 },
            { lat: 42.3645, lng: -71.055 },
            { lat: 42.365, lng: -71.0565 },
            { lat: 42.365, lng: -71.058 },
            { lat: 42.3645, lng: -71.0595 },
            { lat: 42.364, lng: -71.0605 },
            { lat: 42.363, lng: -71.061 },
            { lat: 42.362, lng: -71.061 },
            { lat: 42.361, lng: -71.0605 },
            { lat: 42.3605, lng: -71.0595 },
        ],
        [
            { lat: 42.355, lng: -71.05 },
            { lat: 42.3555, lng: -71.0475 },
            { lat: 42.356, lng: -71.046 },
            { lat: 42.357, lng: -71.0455 },
            { lat: 42.358, lng: -71.0455 },
            { lat: 42.359, lng: -71.046 },
            { lat: 42.3595, lng: -71.047 },
            { lat: 42.36, lng: -71.0485 },
            { lat: 42.36, lng: -71.05 },
            { lat: 42.3595, lng: -71.0515 },
            { lat: 42.359, lng: -71.0525 },
            { lat: 42.358, lng: -71.053 },
            { lat: 42.357, lng: -71.053 },
            { lat: 42.356, lng: -71.0525 },
            { lat: 42.3555, lng: -71.0515 },
        ],
    ],
];
