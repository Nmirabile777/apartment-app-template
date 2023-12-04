// Our data will be structured as
// Isochrone(s)
//  ↪Polygon(s)
//    ↪Coordinates

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
    // First large circular polygon centered closer to Downtown Boston
    [
        [
            { lat: 42.4050, lng: -71.0600 },
            { lat: 42.4047, lng: -71.0880 },
            { lat: 42.3990, lng: -71.1150 },
            { lat: 42.3875, lng: -71.1355 },
            { lat: 42.3725, lng: -71.1455 },
            { lat: 42.3575, lng: -71.1355 },
            { lat: 42.3460, lng: -71.1150 },
            { lat: 42.3415, lng: -71.0880 },
            { lat: 42.3417, lng: -71.0600 },
            { lat: 42.3460, lng: -71.0370 },
            { lat: 42.3575, lng: -71.0150 },
            { lat: 42.3725, lng: -71.0050 },
            { lat: 42.3875, lng: -71.0150 },
            { lat: 42.3990, lng: -71.0370 },
        ],
    ],
    // Second large circular polygon centered closer to South Boston
    [
        [
            { lat: 42.3750, lng: -71.0300 },
            { lat: 42.3748, lng: -71.0630 },
            { lat: 42.3680, lng: -71.0900 },
            { lat: 42.3550, lng: -71.1075 },
            { lat: 42.3375, lng: -71.1165 },
            { lat: 42.3200, lng: -71.1075 },
            { lat: 42.3070, lng: -71.0900 },
            { lat: 42.3020, lng: -71.0630 },
            { lat: 42.3022, lng: -71.0300 },
            { lat: 42.3070, lng: -71.0070 },
            { lat: 42.3200, lng: -70.9870 },
            { lat: 42.3375, lng: -70.9775 },
            { lat: 42.3550, lng: -70.9870 },
            { lat: 42.3680, lng: -71.0070 },
        ],
    ],
    // Third large circular polygon centered closer to Cambridge
    [
        [
            { lat: 42.4100, lng: -71.0800 },
            { lat: 42.4098, lng: -71.1080 },
            { lat: 42.4050, lng: -71.1400 },
            { lat: 42.3945, lng: -71.1640 },
            { lat: 42.3795, lng: -71.1745 },
            { lat: 42.3645, lng: -71.1640 },
            { lat: 42.3540, lng: -71.1400 },
            { lat: 42.3505, lng: -71.1080 },
            { lat: 42.3507, lng: -71.0800 },
            { lat: 42.3540, lng: -71.0520 },
            { lat: 42.3645, lng: -71.0300 },
            { lat: 42.3795, lng: -71.0195 },
            { lat: 42.3945, lng: -71.0300 },
            { lat: 42.4050, lng: -71.0520 },
        ],
    ],
];